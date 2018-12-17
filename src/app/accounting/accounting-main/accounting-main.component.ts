import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounting-main',
  templateUrl: './accounting-main.component.html',
  styleUrls: ['./accounting-main.component.css']
})
export class AccountingMainComponent implements OnInit {

  role = localStorage.getItem('role');

  constructor(private router: Router) { }

  ngOnInit() {
    if((this.role == "provost" || this.role == "accountant")) {
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

}
