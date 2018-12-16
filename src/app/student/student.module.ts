import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EducationInfoComponent } from './student-detail/education-info/education-info.component';
import { PersonalInfoComponent } from './student-detail/personal-info/personal-info.component';
import { ResidenceInfoComponent } from './student-detail/residence-info/residence-info.component';
import { CommentsComponent } from './student-detail/comments/comments.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddStudentComponent } from './student-list/add-student/add-student.component';
import { StudentService } from './student.service';
import {ToastyModule} from 'ng2-toasty';
import { FileSelectDirective } from 'ng2-file-upload';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SelectModule } from 'ng2-select';

export const StudentRoutes: Routes = [
{
  path: '',
  component: StudentListComponent,
  data: {
    breadcrumb: 'বর্তমান ছাত্র',
    icon: 'icofont icofont-id bg-c-pink'
  }
},
{ 
  path: "details/:id", 
  component: StudentDetailComponent,
  pathMatch: 'full',
},
{ 
  path: "add_student/:id", 
  component: AddStudentComponent,
  pathMatch: 'full',
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StudentRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    CollapseModule .forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastyModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    StudentService
  ],
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    EducationInfoComponent,
    PersonalInfoComponent,
    ResidenceInfoComponent,
    AddStudentComponent,
    CommentsComponent,
    FileSelectDirective
  ]
})
export class StudentModule { }
