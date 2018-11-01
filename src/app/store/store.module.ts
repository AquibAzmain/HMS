import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list/store-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { StoreService } from './store.service';

export const StoreRoutes: Routes = [
  {
    path: '',
    component: StoreListComponent,
    data: {
      breadcrumb: 'হল স্টোর',
      icon: 'icofont icofont-box bg-c-yellow'
    }
  }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StoreRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    CollapseModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    StoreService
  ],
  declarations: [StoreListComponent]
})
export class StoreModule { }
