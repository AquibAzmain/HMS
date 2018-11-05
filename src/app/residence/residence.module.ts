import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidenceListComponent } from './residence-list/residence-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BlockListComponent } from './residence-list/block-list/block-list.component';
import { RoomListComponent } from './residence-list/room-list/room-list.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ResidenceService } from './residence.service';

export const ResidenceRoutes: Routes = [
  {
    path: '',
    component: ResidenceListComponent,
    data: {
      breadcrumb: 'আবাসিক',
      icon: 'icofont icofont-address-book bg-c-lite-blue'
    }
  },
  {
    path: "block_details/:id",
    component: BlockDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: "details/:roomNumber",
    component: RoomDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: "block_details/:id/details/:id",
    component: RoomDetailsComponent,
    pathMatch: 'full'
  }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ResidenceRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    CollapseModule,
    ModalModule.forRoot()
  ],
  providers: [
    ResidenceService
  ],
  declarations: [ResidenceListComponent, BlockListComponent, RoomListComponent, RoomDetailsComponent, BlockDetailsComponent]
})
export class ResidenceModule { }
