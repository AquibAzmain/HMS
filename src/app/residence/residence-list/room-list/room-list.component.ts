import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ResidenceService } from '../../residence.service';
import { Room } from '../../../../models/Room';
import { Block} from '../../../../models/Block';
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  position = 'bottom';
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
  rooms: any;
  blocks:Block[];
  roomToBeAdded: Room = new Room();
  roomToBeSearched: Room = new Room();
  houseTutors: any;
  hasError = false;
  constructor(public http: Http, private modalService: BsModalService,
              private residenceService : ResidenceService,
              private router: Router,
              private toastyService: ToastyService) { }

  ngOnInit() {
    this.hasError = false;
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getRoomData();
      this.getBlockData();
      this.getHouseTutorList()
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  getRoomData() {
    this.residenceService.getRoomList()
      .subscribe((response) => { 
        this.rooms = response;
        console.log(this.rooms);
      },
      (err) => {
        this.errorToast();
      })
  }

  getBlockData() {
    this.residenceService.getBlockList()
      .subscribe((response) => { 
        this.blocks = response;
        console.log(this.blocks);
      });
  }


  public openAddBlockModal(template: TemplateRef<any>) {
    this.roomToBeAdded = new Room();
    this.modalRef = this.modalService.show(template);
  }

  confirmAddRoom(): void {
    this.modalRef.hide();
    console.log(this.roomToBeAdded);
    this.residenceService.addRoom(this.roomToBeAdded)
    .subscribe((response) => { 
      this.successToast();
      this.roomToBeAdded = response;
      this.rooms.push(this.roomToBeAdded);
      this.getRoomData();
    },
    (err) => {
      this.errorToast();
    })
  }


  confirmUpdateRoom(room): void {
    if(!room.capacity){
      room.capacity =0;
    }
    this.modalRef.hide();
    this.residenceService.updateRoom(room)
    .subscribe((response) => { 
      this.getRoomData();
        this.successToast();
      },
      (err) => {
        this.errorToast();
      })
  }


  confirmDelete(room): void {

    this.deleteModalRef.hide();
    this.residenceService.deleteRoom(room)
    .subscribe((response) => { 
      let index = this.rooms.indexOf(room);
      this.rooms.splice(index,1);
        this.successToast();
      },
      (err) => {
        this.errorToast();
      })
  }

  searchSortRoom(room){
    this.residenceService.searchSortRoom(room)
      .subscribe((response) => {
        this.successToast();
        this.rooms = response;
      }, error => {
        this.errorToast();
      });
  }

  getHouseTutorList(){
    this.residenceService.getHouseTutors()
    .subscribe((response) => {
      this.houseTutors = response;
      console.log(this.houseTutors);
    });
  }


  public openAddRoomModal(template: TemplateRef<any>) {
    this.roomToBeAdded = new Room();
    this.modalRef = this.modalService.show(template);
  }
  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন কক্ষ যুক্ত করুন";
    else this.modalHeader = "কক্ষের তথ্য সংশোধন";
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

  public openUpdateRoomModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
      msg: 'Operation not successful. Check your net connection',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }
}
