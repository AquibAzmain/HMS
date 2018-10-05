import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EducationInfoComponent } from './student-detail/education-info/education-info.component';
import { PersonalInfoComponent } from './student-detail/personal-info/personal-info.component';
import { ResidenceInfoComponent } from './student-detail/residence-info/residence-info.component';
import { CommentsComponent } from './student-detail/comments/comments.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {QuillEditorModule} from 'ngx-quill-editor';
import {FormsModule} from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';

export const StudentRoutes: Routes = [
{
  path: '',
  component: StudentListComponent,
  data: {
    breadcrumb: 'ছাত্র',
    icon: 'icofont icofont-id bg-c-pink'
  }
},
{ 
  path: "details/:id", 
  component: StudentDetailComponent,
  pathMatch: 'full',
  data: {
    breadcrumb: 'ছাত্র বিবরণ',
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
    QuillEditorModule,
    CollapseModule .forRoot()
  ],
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    EducationInfoComponent,
    PersonalInfoComponent,
    ResidenceInfoComponent,
    CommentsComponent
  ]
})
export class StudentModule { }
