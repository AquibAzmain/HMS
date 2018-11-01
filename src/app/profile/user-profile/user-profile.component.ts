import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  user_info = { name: 'Mr. A', mobile_number: '01711456789'};
  successMessage = '';
  errorMessage = '';
  editProfile = true;
  editProfileIcon = 'icofont-edit';

  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  constructor(public http: Http, 
    private modalService: BsModalService, 
    private profileService: ProfileService, 
    private router: Router) { }

  ngOnInit() {
    // this.profileService.getProfile(localStorage.getItem("token")).subscribe(resp => {
    //   this.user_info = resp;
    // }, err => {
    //   this.router.navigate(['/**']);
    // });
  }

  editUserInfo(){
    this.successMessage = '';
    this.errorMessage = '';
    this.profileService.editProfile(this.user_info).subscribe(resp => {
      this.successMessage = "User info updated successfully.";
    }, err => {
      this.errorMessage = err.error.type;
    });
  }

  toggleEditProfile() {
    this.successMessage = '';
    this.errorMessage = '';
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন সম্পদ যুক্ত করুন";
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

}
