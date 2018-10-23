import { Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { PageNotFoundComponent } from './authentication/page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'authentication/login',
        pathMatch: 'full'
      },
      {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      },{
        path: 'student',
        loadChildren: './student/student.module#StudentModule'
      },{
        path: 'employee',
        loadChildren: './employee/employee.module#EmployeeModule'
      }, {
        path: 'store',
        loadChildren: './store/store.module#StoreModule'
      },{
        path: 'residence',
        loadChildren: './residence/residence.module#ResidenceModule'
      },{
        path: 'notifications',
        loadChildren: './notifications/notifications.module#NotificationsModule'
      },{
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      }, {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      },{
        path: 'accounting',
        loadChildren: './accounting/accounting.module#AccountingModule'
      }

    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
