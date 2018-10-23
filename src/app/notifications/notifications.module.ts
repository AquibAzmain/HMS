import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

export const notificationsRoutes: Routes = [
  {
    path: '',
    component: NotificationListComponent,
    data: {
      breadcrumb: 'নোটিফিকেশন',
      icon: 'icofont icofont-notification bg-c-purple',
      status: true
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(notificationsRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [NotificationListComponent]
})
export class NotificationsModule { }
