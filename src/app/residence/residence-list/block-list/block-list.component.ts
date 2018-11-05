import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ResidenceService } from '../../residence.service';
import { Block } from '../../../../models/Block';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  //role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  role="hallOfficer";
  blocks: Block[] = [];
  blockToBeAdded: Block = new Block();
  
  constructor(public http: Http, private modalService: BsModalService,
              private residenceService : ResidenceService,
              private router: Router) { }

  ngOnInit() {
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getBlockData();
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  getBlockData() {
    this.residenceService.getBlockList()
      .subscribe((response) => { 
        this.blocks = response;
        console.log(this.blocks);
      });
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

  confirmAddEmployee(): void {
    this.modalRef.hide();
    this.residenceService.addBlock(this.blockToBeAdded)
    .subscribe((response) => { 
      ////////////////////alert//////////////////////////
      this.blockToBeAdded = response;
      this.blocks.push(this.blockToBeAdded);
      this.getBlockData();
    });
  }

  confirmUpdateBlock(block): void {
    this.modalRef.hide();
    this.residenceService.updateBlock(block)
    .subscribe((response) => { 
      this.getBlockData();
      console.log(response);
      console.log(block);
       ////////////////////alert//////////////////////////
    });
  }

  confirmDelete(block): void {
    console.log(block)
    this.deleteModalRef.hide();
    this.residenceService.deleteBlock(block)
    .subscribe((response) => { 
      let index = this.blocks.indexOf(block);
      this.blocks.splice(index,1);
        ////////////////////alert//////////////////////////
    });
  }



}
