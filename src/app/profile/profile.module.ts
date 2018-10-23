import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

export const ProfileRoutes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    data: {
      breadcrumb: 'প্রোফাইল',
      icon: 'icofont icofont-justify-all bg-c-blue'
    }
  }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    CollapseModule,
    ModalModule.forRoot()
  ],
  declarations: [UserProfileComponent]
})
export class ProfileModule { }
