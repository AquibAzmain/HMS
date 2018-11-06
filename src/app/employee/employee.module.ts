import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './employee-detail/basic-info/basic-info.component';
import { LeaveInfoComponent } from './employee-detail/leave-info/leave-info.component';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import { ToastyModule } from 'ng2-toasty';

export const EmployeeRoutes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    data: {
      breadcrumb: 'কর্মকর্তা/কর্মচারী',
      icon: 'icofont icofont-user bg-c-green'
    }
  },
  {
    path: "details/:id",
    component: EmployeeDetailComponent,
    pathMatch: 'full'
  }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    CollapseModule .forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastyModule.forRoot()
  ],
  providers: [
    EmployeeService
  ],
  declarations: [EmployeeListComponent, LeaveInfoComponent, EmployeeDetailComponent, BasicInfoComponent]
})
export class EmployeeModule { }
