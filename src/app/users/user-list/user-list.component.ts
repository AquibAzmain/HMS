import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http, Jsonp} from '@angular/http';
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

  message = '';
  errorMessage = '';
  deleteUser = {
    mobile_number: ''
  };
  role = localStorage.getItem('role');
  editUser = {
    mobile_number: '',
    role: ''
  };

  createUserData = {
    name: '',
    mobile_number: '',
    password: '',
    confirm_password: '',
    role: ''
  }

  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;
  public updateModalRef: BsModalRef;
  constructor(public http: Http, 
    private modalService: BsModalService, 
    private userService: UserService, 
    private router: Router) { }

  ngOnInit() {
    // this.http.get(`assets/data/users.json`)
    // .subscribe((data) => {
    //   this.data = data.json();
    // });
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe(resp => {
      this.data = resp;
    }, err => {
      this.router.navigate(['/**']);
    });
  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.errorMessage = '';
    this.message = '';
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন ব্যবহারকারী যুক্ত করুন";
    else this.modalHeader = "তথ্য সংশোধন";
  }

  public openUpdateUserModal(template: TemplateRef<any>, user: any) {
    this.errorMessage = '';
    this.message = '';
    this.editUser.mobile_number = user.mobile_number;
    this.updateModalRef = this.modalService.show(template);
  }

  public confirmUpdateUser(){
    console.log(this.editUser.role);
    this.userService.editUserRole(this.editUser).subscribe(resp => {
      this.message = "User role updated successfully.";
      this.loadUsers();
    }, err => {
      err = JSON.parse(err.error);
      this.message = '';
      this.errorMessage = err.status;
    });
    this.updateModalRef.hide();
  }

  public declineUpdate(){
    this.updateModalRef.hide();
  }

  confirm(): void {
    console.log('Confirmed!');
    this.userService.createUser(this.createUserData).subscribe(resp => {
      this.errorMessage = '';
      this.message = "User Created Successfully.";
      this.loadUsers();
      this.modalRef.hide();
    }, err => {
      err = JSON.parse(err.error);
      this.message = '';
      this.errorMessage = err.status;
    });
    
  }
 
  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
  }

  public openDeleteModal(template: TemplateRef<any>, item: any) {
    this.errorMessage = '';
    this.message = '';
    this.deleteUser.mobile_number = item.mobile_number;
    this.deleteModalRef = this.modalService.show(template);
  }

  confirmDelete(): void {
    this.userService.editUserStatus(this.deleteUser).subscribe(resp => {
      this.errorMessage = '';
      this.message = "User status edited successfully.";
      this.loadUsers();
    }, err => {
      this.message = '';
      this.errorMessage = JSON.parse(err.error).status;
    });
    this.deleteModalRef.hide();
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }

}
