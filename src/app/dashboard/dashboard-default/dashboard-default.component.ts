import { Component, OnInit } from '@angular/core';

import '../../../assets/charts/amchart/amcharts.js';
import '../../../assets/charts/amchart/gauge.js';
import '../../../assets/charts/amchart/pie.js';
import '../../../assets/charts/amchart/serial.js';
import '../../../assets/charts/amchart/light.js';
import '../../../assets/charts/amchart/ammap.js';
import '../../../assets/charts/amchart/worldLow.js';
import { EmployeeService } from '../../employee/employee.service';
import { Employee } from '../../../models/Employee';
import { StudentService } from '../../student/student.service';
import { ResidenceService } from '../../residence/residence.service';
import { Room } from '../../../models/Room';
import { Student } from '../../../models/Student';
import { Router } from '@angular/router'

declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: [
    './dashboard-default.component.css'
  ]
})
export class DashboardDefaultComponent implements OnInit {
  employees: Employee[] = [];
  students: Student[] = [];
  rooms: Room[] =[];
  numberOfEmployees;
  numberOfStudents;
  numberOfRooms;
  constructor(private employeeService : EmployeeService,
    private studentService : StudentService,
    private residenceService : ResidenceService,
    private router: Router) { }


  ngOnInit() {
    if(localStorage.getItem("token") == null){
      this.router.navigate(['/authentication/login']);
      return;
    }
    else {
      this.getEmployeeData();
      this.getNumberOfStudents();
      this.getNumberOfRooms()
    };
  }

  getEmployeeData() {
    this.employeeService.getEmployeeList()
      .subscribe((response) => { 
        this.employees = response;
        this.numberOfEmployees = this.employees.length;
        //console.log();
      });
  }

  getNumberOfStudents() {
    this.studentService.getStudentList()
      .subscribe((response) => { 
        this.students = response;
        this.numberOfStudents = this.students.length;
        console.log(response);
      });
  }

  getNumberOfRooms() {
    this.residenceService.getRoomList()
      .subscribe((response) => { 
        this.rooms = response;
        this.numberOfRooms = this.rooms.length;
        console.log(this.rooms.length);
      });
  }
}

