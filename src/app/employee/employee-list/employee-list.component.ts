import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../../models/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true; 
  bsValue = new Date();
  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  role = "hallOfficer"; //admin hallOfficer localStorage.getItem('role');
  employees: Employee[] = [];
  employeeToBeAdded: Employee = new Employee();
  
  constructor(public http: Http, private modalService: BsModalService,
              private employeeService : EmployeeService,
              private router: Router) { }

  ngOnInit() {
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.employeeService.getEmployeeList()
      .subscribe((response) => { 
        this.employees = response;
        console.log(this.employees);
      });
    }
    else {
      this.router.navigate(['/**']);
    }
   
    // let e : Employee = new Employee();
    // e.id = 1;
    // e.name = "Md. Joarder";
    // e.address = "dhaka university";
    // e.job_title = "provost";
    // e.contact_number = "01913224407";
    // e.department = "IIT";
    // e.campus_residency = "yes";
    // this.employees.push(e);

    // let e2 : Employee = new Employee();
    // e2.id = 2;
    // e2.name = "Md. Majhar";
    // e2.address ="fuller road";
    // e2.contact_number ="01815224407";
    // e2.job_title = "hall officer";
    // e2.campus_residency = "no";    
    // this.employees.push(e2);
  }

  // public openModal(template: TemplateRef<any>, type: string) {
  //   this.modalRef = this.modalService.show(template);
  //   if(type=="add")this.modalHeader = "নতুন কর্মকর্তা/কর্মচারী যুক্ত করুন";
  //   else this.modalHeader = "তথ্য সংশোধন";
  // }

  public openUpdateEmployeeModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public openAddEmployeeModal(template: TemplateRef<any>) {
    this.employeeToBeAdded = new Employee();
    this.modalRef = this.modalService.show(template);
  }

  confirmAddEmployee(): void {
    console.log(this.employees.length);
    this.modalRef.hide();
    this.employeeService.addEmployee(this.employeeToBeAdded)
    .subscribe((response) => { 
      ////////////////////alert//////////////////////////
      this.employees.push(this.employeeToBeAdded);
    });
  }

  confirmUpdateEmployee(employee): void {
    this.modalRef.hide();
    this.employeeService.updateEmployee(employee)
    .subscribe((response) => { 
      console.log(employee);
       ////////////////////alert//////////////////////////
    });
  }

  // confirm(): void {
  //   console.log('Confirmed!');
  //   this.modalRef.hide();
  // }
 
  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  confirmDelete(employee): void {
    console.log(employee)
    this.deleteModalRef.hide();
    this.employeeService.deleteEmployee(employee)
    .subscribe((response) => { 
      let index = this.employees.indexOf(employee);
      this.employees.splice(index,1);
        ////////////////////alert//////////////////////////
    });
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }


}
