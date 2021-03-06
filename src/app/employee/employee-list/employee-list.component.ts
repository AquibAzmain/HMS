import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../../models/Employee';
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  position = 'bottom';
  public employeeToBeSearched: Employee = new Employee();
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

  role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  employees: Employee[] = [];
  employeeToBeAdded: Employee = new Employee();
  
  confirmAddError = false
  confirmUpdateError = false
  
  today = new Date();

  constructor(public http: Http, private modalService: BsModalService,
              private employeeService : EmployeeService,
              private router: Router,
              private toastyService: ToastyService) { }

  ngOnInit() {
    if(localStorage.getItem("token") == null){
      this.router.navigate(['/authentication/login']);
      return;
    }
    if((this.role == "provost" || this.role == "hallOfficer")) {
      this.today = new Date();
      this.getEmployeeData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  getEmployeeData() {
    this.employeeService.getEmployeeList()
      .subscribe((response) => { 
        this.employees = response;
        console.log(this.employees);
      },
      (err) => {
        this.errorToast('Operation not successful.');
      })
  }

  public openUpdateEmployeeModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public openAddEmployeeModal(template: TemplateRef<any>) {
    this.employeeToBeAdded = new Employee();
    this.modalRef = this.modalService.show(template);
  }

  confirmAddEmployee(): void {
    console.log(this.employees.length);
    if(this.employeeToBeAdded.name==null || this.employeeToBeAdded.contact_number==null || this.employeeToBeAdded.job_title==null ) {
      this.confirmAddError = true;
      this.errorToast('Please Fillup Required Fields');
    }
    else if (this.employeeToBeAdded.contact_number.match(/[a-z]/i)) {
      this.confirmAddError = true;
      this.errorToast('Error in Mobile Number.');
    }
    else {
      this.confirmAddError = false;

      this.modalRef.hide();
      if(this.employeeToBeAdded.joining_date != null){
        this.employeeToBeAdded.joining_date = this.formatDate(this.employeeToBeAdded.joining_date);
      }
      this.employeeService.addEmployee(this.employeeToBeAdded)
      .subscribe((response) => { 
        this.successToast();
        this.employeeToBeAdded = response;
        this.employees.push(this.employeeToBeAdded);
        this.getEmployeeData();
      },
      (err) => {
        this.errorToast('Operation not successful. Check your net connection');
      })
    }
  }

  confirmUpdateEmployee(employee): void {
    if(employee.name==null || employee.contact_number==null || employee.job_title==null ) {
      this.confirmUpdateError = true;
      this.errorToast("")
      this.errorToast('Please Fillup Required Fields');
      console.log("error")
    }
    if(employee.name.length == 0 || employee.contact_number.length == 0 || employee.job_title.length == 0 ) {
      this.confirmUpdateError = true;
      this.errorToast('Please Fillup Required Fields');
      console.log("error");
    }
    else if (employee.contact_number.match(/[a-z]/i)) {
      this.confirmUpdateError = true;
      this.errorToast('Error in Mobile Number.');
    }
    else {
      this.confirmUpdateError = false;      
      console.log(employee)
      this.modalRef.hide();
      if(employee.joining_date != null){
        employee.joining_date = this.formatDate(employee.joining_date);
      }
      
      this.employeeService.updateEmployee(employee)
      .subscribe((response) => { 
      this.getEmployeeData();
        // console.log(response);
        // console.log(employee);
        this.successToast();
      },
      (err) => {
        this.errorToast('Operation not successful. Check your net connection');
      })
    }
  }

  // confirm(): void {
  //   console.log('Confirmed!');
  //   this.modalRef.hide();
  // }
 
  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
    this.getEmployeeData();
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
      this.successToast();
    }, 
    (err) => {
      this.errorToast('Operation not successful.');
    })
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }

  searchSortEmployee(employeeToBeSearched){
    this.employeeService.searchSortEmployee(employeeToBeSearched)
    .subscribe((response) => { 
      this.employees = response;
      this.successToast();
    }, 
    (err) => {
      this.errorToast('Operation not successful.');
    })
  }

  public formatDate(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();
    return day + '/' + monthIndex + '/' + year;
  }

  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

  successToast() {
    this.addToast({
      title: 'Success',
      msg: 'Operation successful.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'success'
    });
  }

  errorToast(errorMessage) {
    this.addToast({
      title: 'Error',
      msg: errorMessage,
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

}
