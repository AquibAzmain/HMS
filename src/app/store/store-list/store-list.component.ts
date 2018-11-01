import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../store.service';
import { Asset } from '../../../models/Asset';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  bsValue = new Date();
  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  assets: Asset[] = [];
  assetToBeAdded: Asset = new Asset();
  
  constructor(public http: Http, private modalService: BsModalService,
              private assetService : StoreService,
              private router: Router) { }


  ngOnInit() {
    // let role = "admin";
    // if((role != "provost")) {
    //   this.router.navigate(['/**']);
    // }
   
    this.assetService.getAssetList()
    .subscribe((response) => { 
      this.data = response;
      console.log(this.assets);
    });

    // this.http.get(`assets/data/store.json`)
    // .subscribe((data) => {
    //   this.data = data.json();
    // });
  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন সম্পদ যুক্ত করুন";
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
    // this.storeService.addAsset(this.assetToBeAdded);
    this.assets.push(this.assetToBeAdded);
    console.log(this.assets.length);
    this.modalRef.hide();
  }

  confirmUpdateAsset(asset): void {
    this.assetService.updateAsset(asset);
    console.log(asset);
    this.modalRef.hide();
  }

  // confirm(): void {
  //   console.log('Confirmed!');
  //   this.modalRef.hide();
  // }
 
  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  confirmDelete(asset): void {
    console.log(asset)
    let index = this.assets.indexOf(asset);
    this.assets.splice(index,1);
    this.deleteModalRef.hide();
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }

}
