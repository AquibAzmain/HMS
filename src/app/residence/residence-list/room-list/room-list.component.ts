import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ResidenceService } from '../../residence.service';
import { Room } from '../../../../models/Room';
import { Block} from '../../../../models/Block';
import { Router } from '@angular/router';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

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
  rooms: Room[] = [];
  blocks:Block[];
  roomToBeAdded: Room = new Room();
  
  constructor(public http: Http, private modalService: BsModalService,
              private residenceService : ResidenceService,
              private router: Router) { }

  ngOnInit() {
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getRoomData();
      this.getBlockData();
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
      });
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
    this.residenceService.addRoom(this.roomToBeAdded)
    .subscribe((response) => { 
      ////////////////////alert//////////////////////////
      this.roomToBeAdded = response;
      this.rooms.push(this.roomToBeAdded);
      this.getRoomData();
    });
  }


  confirmUpdateRoom(room): void {
    this.modalRef.hide();
    this.residenceService.updateRoom(room)
    .subscribe((response) => { 
      this.getRoomData();
    
       ////////////////////alert//////////////////////////
    });
  }


  confirmDelete(room): void {

    this.deleteModalRef.hide();
    this.residenceService.deleteRoom(room)
    .subscribe((response) => { 
      let index = this.rooms.indexOf(room);
      this.rooms.splice(index,1);
        ////////////////////alert//////////////////////////
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
}
