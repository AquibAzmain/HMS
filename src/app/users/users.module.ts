import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserListComponent } from './user-list/user-list.component';

export const UserRoutes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      breadcrumb: 'সিস্টেম ব্যবহারকারী',
      icon: 'icofont icofont-ui-user-group bg-c-pink'
    }
  }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    CollapseModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [UserListComponent]
})
export class UsersModule { }
