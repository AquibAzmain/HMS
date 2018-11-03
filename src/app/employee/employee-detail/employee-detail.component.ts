import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Employee } from '../../../models/Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  role = localStorage.getItem('role'); //"hallOfficer";
  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute,
    private employeeService : EmployeeService,
    private router: Router) { }

  ngOnInit() {
    //console.log(employeeId);
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getEmployeeData();
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  getEmployeeData() {
    let employeeId = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(employeeId)
    .subscribe((response) => { 
      this.employee = response;
    });
  }
}
