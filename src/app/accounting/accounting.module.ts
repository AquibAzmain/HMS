import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingMainComponent } from './accounting-main/accounting-main.component';
import {RouterModule, Routes} from '@angular/router';
import { IncomeComponent } from './accounting-main/income/income.component';
import { ExpenseComponent } from './accounting-main/expense/expense.component';
import { ReportComponent } from './accounting-main/report/report.component';
import {SharedModule} from '../shared/shared.module';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {QuillEditorModule} from 'ngx-quill-editor';
import {FormsModule} from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MyDatePickerModule } from 'mydatepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CategoryEditComponent } from './accounting-main/category-edit/category-edit.component';
import { IncomeCategoryComponent } from './accounting-main/category-edit/income-category/income-category.component';
import { ExpenseCategoryComponent } from './accounting-main/category-edit/expense-category/expense-category.component'

export const AccountingRoutes: Routes = [
  {
    path: '',
    component: AccountingMainComponent,
    data: {
      breadcrumb: 'হিসাব-নিকাশ',
      icon: 'icofont icofont-cur-dollar bg-c-brown'
    }
  }  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountingRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    QuillEditorModule,
    CollapseModule .forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MyDatePickerModule
  ],
  declarations: [
    IncomeComponent,
    ExpenseComponent, 
    ReportComponent,
    CategoryEditComponent, 
    AccountingMainComponent,
    IncomeCategoryComponent,
    ExpenseCategoryComponent
  ]
})
export class AccountingModule { }
