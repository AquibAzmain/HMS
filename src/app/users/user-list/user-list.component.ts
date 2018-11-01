import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef
  constructor(public http: Http, 
    private modalService: BsModalService, 
    private userService: UserService, 
    private router: Router) { }

  ngOnInit() {
    this.http.get(`assets/data/users.json`)
    .subscribe((data) => {
      this.data = data.json();
    });
    // this.userService.getUsers(localStorage.getItem("token")).subscribe(resp => {
    //   this.data = resp;
    // }, err => {
    //   this.router.navigate(['/**']);
    // });
  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন ব্যবহারকারী যুক্ত করুন";
    else this.modalHeader = "তথ্য সংশোধন";
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

  confirmDelete(): void {
    this.deleteModalRef.hide();
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }

}
