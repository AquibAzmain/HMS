import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  constructor() { }

  editProfile = true;
  editProfileIcon = 'icofont-edit';

  editAbout = true;
  editAboutIcon = 'icofont-edit';


    ngOnInit() {
    }

    toggleEditProfile() {
      this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
      this.editProfile = !this.editProfile;
    }
  
    toggleEditAbout() {
      this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
      this.editAbout = !this.editAbout;
    }
  
}