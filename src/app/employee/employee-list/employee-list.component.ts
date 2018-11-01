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

  employees: Employee[] = [];
  employeeToBeAdded: Employee = new Employee();
  
  constructor(public http: Http, private modalService: BsModalService,
              private employeeService : EmployeeService,
              private router: Router) { }

  ngOnInit() {
    // let role = "admin";
    // if((role != "provost")) {
    //   this.router.navigate(['/**']);
    // }
   
    // this.employeeService.getEmployeeList()
    // .subscribe((response) => { 
    //   this.employees = response;
    //   console.log(this.employees);
    // });
    let e : Employee = new Employee();
    e.id = 1;
    e.name = "mou";
    this.employees.push(e);

    let e2 : Employee = new Employee();
    e2.id = 2;
    e2.name = "mew";
    e2.address ="fuller";
    e2.contact_number ="018";
    this.employees.push(e2);
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
    // this.employeeService.addEmployee(this.employeeToBeAdded);
    this.employees.push(this.employeeToBeAdded);
    console.log(this.employees.length);
    this.modalRef.hide();
  }

  confirmUpdateEmployee(employee): void {
    this.employeeService.updateEmployee(employee);
    console.log(employee);
    this.modalRef.hide();
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
    //this.employeeService.deleteEmployee(employee);
    console.log(employee)
    let index = this.employees.indexOf(employee);
    this.employees.splice(index,1);
    this.deleteModalRef.hide();
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }


}
