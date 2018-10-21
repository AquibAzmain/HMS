import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  bsValue = new Date();
  constructor() { }

  ngOnInit() {
  }

}
