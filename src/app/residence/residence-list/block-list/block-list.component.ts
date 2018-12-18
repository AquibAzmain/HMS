import { Component, OnInit, TemplateRef } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ResidenceService } from '../../residence.service';
import { Block } from '../../../../models/Block';
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {
  position = 'bottom';
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed: boolean = true;

  modalHeader: string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  hasAddError = false;
  role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  blocks: Block[] = [];
  blockToBeAdded: Block = new Block();

  constructor(public http: Http, private modalService: BsModalService,
    private residenceService: ResidenceService,
    private router: Router,
    private toastyService: ToastyService) { }

  ngOnInit() {
    if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
      this.getBlockData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  getBlockData() {
    this.residenceService.getBlockList()
      .subscribe((response) => {
        this.blocks = response;
        console.log(this.blocks);
      });
  }

  declineUpdate(){
    this.modalRef.hide();
    this.getBlockData()
  }


  /*
  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন ব্লক যুক্ত করুন";
    else this.modalHeader = "ব্লকের তথ্য সংশোধন";
  }
  */


  public openAddBlockModal(template: TemplateRef<any>) {
    this.blockToBeAdded = new Block();
    this.modalRef = this.modalService.show(template);
  }

  public openUpdateBlockModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm(): void {
    console.log('Confirmed!');
    this.modalRef.hide();
  }

  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  declineDelete(): void {
    this.deleteModalRef.hide();
  }

  confirmAddBlock(): void {
    console.log(this.blockToBeAdded);
    if (this.blockToBeAdded.block_name == null || this.blockToBeAdded.location == null) {
      this.hasAddError = true;
    }
    else {
      this.hasAddError = false;
      this.modalRef.hide();
      this.residenceService.addBlock(this.blockToBeAdded)
        .subscribe((response) => {
          this.successToast();
          this.blockToBeAdded = response;
          this.blocks.push(this.blockToBeAdded);
          this.getBlockData();
        },
        (err) => {
          this.errorToast();
        })
    }
  }

  confirmUpdateBlock(block): void {
    this.modalRef.hide();
    this.residenceService.updateBlock(block)
      .subscribe((response) => {
        this.getBlockData();
        this.residenceService.changeMessage("change occured");
        console.log(response);
        console.log(block);
        this.successToast();
      },
      (err) => {
        this.errorToast();
      })
  }

  confirmDelete(block): void {
    console.log(block)
    this.deleteModalRef.hide();
    this.residenceService.deleteBlock(block)
      .subscribe((response) => {
        let index = this.blocks.indexOf(block);
        this.blocks.splice(index, 1);
        this.successToast();
      },
      (err) => {
        this.errorToast();
      })
  }

  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

  successToast() {
    this.addToast({
      title: 'Success',
      msg: 'Operation successful.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'success'
    });
  }

  errorToast() {
    this.addToast({
      title: 'Error',
      msg: 'Operation not successful. Check your net connection',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }



}
