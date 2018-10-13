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

export const AccountingRoutes: Routes = [
  {
    path: '',
    component: AccountingMainComponent,
    data: {
      breadcrumb: 'হিসাব-নিকাশ',
      icon: 'icofont icofont-cur-dollar bg-c-pink'
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
    CollapseModule .forRoot()
  ],
  declarations: [

    IncomeComponent,
    ExpenseComponent, 
    ReportComponent, 
    AccountingMainComponent
  ]
})
export class AccountingModule { }
