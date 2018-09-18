import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
export const StudentRoutes: Routes = [{
  path: '',
  component: StudentListComponent,
  data: {
    breadcrumb: 'ছাত্র',
    icon: 'icofont icofont-id bg-c-pink'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StudentRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule,
  ],
  declarations: [StudentListComponent, StudentDetailComponent]
})
export class StudentModule { }
