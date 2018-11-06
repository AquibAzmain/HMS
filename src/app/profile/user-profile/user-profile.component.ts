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
  
  user_info: any = {
    name: null,
    mobile_number: null
  };
  update_user_info: any;
  successMessage = '';
  errorMessage = '';
  editProfile = true;
  editProfileIcon = 'icofont-edit';
  passwords: any = {old_password: null, new_password: null}
  confirmPassword: any;
  errorMessageInPasswordChange = '';

  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  constructor(public http: Http, 
    private modalService: BsModalService, 
    private profileService: ProfileService, 
    private router: Router) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(resp => {
      this.user_info.name = resp["name"];
      this.user_info.mobile_number = resp["mobile_number"];
    }, err => {
      this.router.navigate(['/**']);
    });
  }

  editUserInfo(){
    this.successMessage = '';
    this.errorMessage = '';
    this.profileService.editProfile(this.update_user_info).subscribe(resp => {
      this.errorMessage = '';
      this.successMessage = "User info updated successfully.";
    }, err => {
      this.errorMessage = JSON.parse(err.error).status;
    });
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
    this.update_user_info = this.user_info;
    this.successMessage = '';
    this.errorMessage = '';
  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.errorMessageInPasswordChange = '';
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন সম্পদ যুক্ত করুন";
    else this.modalHeader = "তথ্য সংশোধন";
  }

  confirm(): void {
    this.successMessage = '';
    this.errorMessageInPasswordChange = '';
    this.errorMessage = '';
    console.log('Confirmed!');
    if(this.confirmPassword != this.passwords.new_password){
      this.errorMessageInPasswordChange = "password does not matched.";
      return;
    }

    this.profileService.changePassword(this.passwords).subscribe(resp => {
      this.successMessage = JSON.parse(JSON.stringify(resp)).status;
      this.editUserInfo = null;
      this.modalRef.hide();
    }, err => {
      this.errorMessageInPasswordChange = JSON.parse(err.error).status;
    });
    
  }
 
  decline(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.errorMessageInPasswordChange = '';
    console.log('Declined!');
    this.modalRef.hide();
  }

}
