import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDefaultComponent } from './dashboard-default.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import { EmployeeService } from '../../employee/employee.service';
import { StudentService } from '../../student/student.service';
import { ResidenceService } from '../../residence/residence.service';

export const DashboardDefaultRoutes: Routes = [
  {
    path: '',
    component: DashboardDefaultComponent,
    data: {
      breadcrumb: 'ড্যাশবোর্ড',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardDefaultRoutes),
    SharedModule,
    ChartModule
  ],
  providers: [
    EmployeeService,
    StudentService,
    ResidenceService
  ],
  declarations: [DashboardDefaultComponent]
})
export class DashboardDefaultModule { }
