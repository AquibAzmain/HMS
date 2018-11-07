import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
    if (localStorage.getItem("token") == null) {
      this.router.navigate(['/authentication/login']);
      return;
    }
  }
  ngOnInit() {

  }
}
