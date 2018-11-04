import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../store.service';
import { Asset } from '../../../models/Asset';
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css',
    '../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../node_modules/ng2-toasty/style-material.css'],
  encapsulation: ViewEncapsulation.None
})
export class StoreListComponent implements OnInit {
  position = 'bottom';

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed: boolean = true;

  bsValue = new Date();
  modalHeader: string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  role = "hallOfficer"; //admin hallOfficer localStorage.getItem('role');
  assets: Asset[] = [];
  assetToBeAdded: Asset = new Asset();

  constructor(public http: Http, private modalService: BsModalService,
    private assetService: StoreService,
    private router: Router,
    private toastyService: ToastyService) { }


  ngOnInit() {
    if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer" || this.role == "admin")) {
      this.assetService.getAssetList()
        .subscribe((response) => {
          this.data = response;
        }, error => {
          this.errorViewToast();
        });
    }
    else {
      this.router.navigate(['/**']);
    }

    // this.http.get(`assets/data/store.json`)
    // .subscribe((data) => {
    //   this.data = data.json();
    // });
  }

  public formatDate(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + '/' + monthIndex + '/' + year;
  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if (type == "add") this.modalHeader = "নতুন সম্পদ যুক্ত করুন";
    else this.modalHeader = "তথ্য সংশোধন";
  }

  public openUpdateAssetModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public openAddAssetModal(template: TemplateRef<any>) {
    this.assetToBeAdded = new Asset();
    this.modalRef = this.modalService.show(template);
  }

  confirmAddAsset(): void {
    this.assetToBeAdded.dateOfPurchase = this.formatDate(this.assetToBeAdded.dateOfPurchase);
    this.modalRef.hide();
    this.assetService.addAsset(this.assetToBeAdded)
      .subscribe((response) => {
        this.successToast();
        this.data.push(this.assetToBeAdded);
      }, error => {
        this.errorDuplicateIdToast();
      });
  }

  confirmUpdateAsset(asset): void {
    this.modalRef.hide();
    this.assetService.updateAsset(asset)
      .subscribe((response) => {
        this.successToast();
        this.data.push(this.assetToBeAdded);
      }, error => {
        this.errorToast();
      });

  }

  decline(): void {
    this.modalRef.hide();
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  confirmDelete(asset): void {
    this.deleteModalRef.hide();
    this.assetService.deleteAsset(asset)
      .subscribe((response) => {
        let index = this.data.indexOf(asset);
        this.data.splice(index, 1);
        this.successToast();
      }, error => {
        this.errorToast();
      });

  }

  declineDelete(): void {
    this.deleteModalRef.hide();
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
      msg: 'Operation not successful.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

  errorViewToast() {
    this.addToast({
      title: 'Error',
      msg: 'Check Internet Connection.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

  errorDuplicateIdToast() {
    this.addToast({
      title: 'Error',
      msg: 'Operation not successful. Duplicate Id in not allowed',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

}
