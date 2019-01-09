import { Component, OnInit, TemplateRef } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../store.service';
import { Asset } from '../../../models/Asset';
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
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
  today:any;
  role = localStorage.getItem('role');
  assets: Asset[] = [];
  assetToBeAdded: Asset = new Asset();
  assetToBeSearched: Asset = new Asset();

  constructor(public http: Http, private modalService: BsModalService,
    private assetService: StoreService,
    private router: Router,
    private toastyService: ToastyService) { }


  ngOnInit() {
    this.today = this.formatDate(new Date());
    if ((this.role == "provost" || this.role == "hallOfficer")) {
      this.getAssetData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  getAssetData() {
    this.assetService.getAssetList()
      .subscribe((response) => { 
        this.data = response;
      }, error => {
        this.errorViewToast();
      });
  }

  searchSortAsset(asset){
    // if(asset.dateOfPurchase != null){
    //   asset.dateOfPurchase = this.formatDate(asset.dateOfPurchase);
    // }
    console.log(asset);
    this.assetService.searchSortAsset(asset)
      .subscribe((response) => {
        this.successToast();
        this.data = response;
      }, error => {
        this.errorToast();
      });
  }

  public formatDate(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth() + 1;
    var year = date.getFullYear();

    return year + '-' + ("0" + monthIndex).slice(-2) + '-' + ("0" + day).slice(-2);
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
    // if(this.assetToBeAdded.dateOfPurchase != null){
    //   this.assetToBeAdded.dateOfPurchase = this.formatDate(this.assetToBeAdded.dateOfPurchase);
    // }
    this.modalRef.hide();
    this.assetService.addAsset(this.assetToBeAdded)
      .subscribe((response) => {
        this.successToast();
        // this.data.push(this.assetToBeAdded);
        this.getAssetData();
      }, error => {
        this.errorDuplicateIdToast();
      });
  }

  confirmUpdateAsset(asset): void {
    this.modalRef.hide();
    // if(asset.dateOfPurchase != null){
    //   asset.dateOfPurchase = this.formatDate(asset.dateOfPurchase);
    //   }
    this.assetService.updateAsset(asset)
      .subscribe((response) => {
        this.successToast();
        //this.data.push(this.assetToBeAdded);
        this.getAssetData();
      }, error => {
        this.errorToast();
      });

  }

  decline(): void {
    this.modalRef.hide();
    this.getAssetData();
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

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    headers: ["ID", "Category", "Quantity", "Location", "Condition", "Date"]
  };

  downloadCSV() {
    new Angular5Csv(this.data, "store_report_"+this.today, this.options);
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
