import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import {FormsModule} from '@angular/forms';

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
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StudentRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    QuillEditorModule
  ],
  declarations: [StudentListComponent, StudentDetailComponent]
})
export class StudentModule { }
