import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Leave } from '../../../../models/Leave';
import { EmployeeService } from '../../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-leave-info',
  templateUrl: './leave-info.component.html',
  styleUrls: ['./leave-info.component.css']
})
export class LeaveInfoComponent implements OnInit {
  position = 'bottom';
  public data: any;
  public rowsOnPage = 5;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  bsValue = new Date();
  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;
  employeeId: any;

  leaves: Leave[] = [];
  leaveToBeAdded: Leave = new Leave();
  pendingLeave = false;
  casualLeave = false;
  entertainmentLeave = false;
  sickLeave = false;
  role = localStorage.getItem('role'); //"hallOfficer"; 
  confirmAddError = false;
  confirmUpdateError = false;
  totalSickLeave = 0;
  totalCasualLeave = 0;

  constructor(public http: Http, private modalService: BsModalService,
    private route: ActivatedRoute,
    private employeeService : EmployeeService,
    private router: Router,
    private toastyService: ToastyService) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    console.log(this.role);
    if((this.role == "provost" || this.role == "hallOfficer")) {
      this.getLeaveData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
    // let l = new Leave();
    // l.approval_status = "approved";
    // l.date_from ="11-2-18";
    // l.date_to ="9-2-18";
    // l.category = "sick";
    // this.leaves.push(l);

    // let l2 = new Leave();
    // l2.approval_status = "pending";
    // l2.date_from ="15-2-18";
    // l2.date_to ="19-2-18";
    // l2.category = "sick";
    // this.leaves.push(l2);
  }

  public getLeaveData() {
    this.employeeService.getLeaveList(this.employeeId)
      .subscribe((response) => { 
        console.log(response);
        this.leaves = response;
        this.checkPendingLeave();
        this.checkCasualLeave();
        this.checkEntertainmentLeave();
        this.checkSickLeave();
        this.getSickLeave();
        this.getCasualLeave();
      },
      (err) => {
        this.errorToast();
      })
  }

  public getSickLeave() {
    this.employeeService.getNumberofSickLeaves(this.employeeId)
      .subscribe((response) => { 
        console.log(response);
        this.totalSickLeave = response['days'];
      },
      (err) => {
        this.errorToast();
      })
  }

  public getCasualLeave() {
    this.employeeService.getNumberofCasualLeaves(this.employeeId)
      .subscribe((response) => { 
        console.log(response);
        this.totalCasualLeave = response['days'];
      },
      (err) => {
        this.errorToast();
      })
  }

  public openUpdateLeaveModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public openAddLeaveModal(template: TemplateRef<any>) {
    this.leaveToBeAdded = new Leave();
    this.modalRef = this.modalService.show(template);
  }

  // public openModal(template: TemplateRef<any>, type: string) {
  //   this.modalRef = this.modalService.show(template);
  //   if(type=="add")this.modalHeader = "ছুটির আবেদন করুন";
  //   else this.modalHeader = "তথ্য সংশোধন";
  // }

  confirm(): void {
    console.log('Confirmed!');
    this.modalRef.hide();
  }
 
  decline(): void {
    this.getLeaveData();
    console.log('Declined!');
    this.modalRef.hide();
  }

  confirmAddLeave(): void {
    if(this.leaveToBeAdded.category==null || this.leaveToBeAdded.date_from==null || this.leaveToBeAdded.date_to==null ) {
      this.confirmAddError = true;
    }
    else {
      this.confirmAddError = false;
      this.modalRef.hide();
      this.leaveToBeAdded.approval_status = "pending";
      this.leaveToBeAdded.employee_id = this.employeeId;
      this.leaveToBeAdded.date_from = this.formatDate(this.leaveToBeAdded.date_from);
      this.leaveToBeAdded.date_to = this.formatDate(this.leaveToBeAdded.date_to);
      console.log(this.leaveToBeAdded);
      this.employeeService.addLeave(this.leaveToBeAdded)
      .subscribe((response) => { 
        console.log(this.leaveToBeAdded);
        this.successToast();
        this.getLeaveData();
      },
      (err) => {
        this.errorToast();
      })
    }
  }

  confirmUpdateLeave(leave): void {
    console.log(leave.category);
    console.log(leave.date_from);
    console.log(leave.date_to);
    
    if(leave.category==null || leave.date_from==null || leave.date_to==null || leave.category.length==0) {
      this.confirmUpdateError = true;
    }
    else {
      this.modalRef.hide();
      this.confirmUpdateError = false;
      if(leave.date_from!=null)
        leave.date_from = this.formatDate(leave.date_from);
      if(leave.date_to!=null)
        leave.date_to = this.formatDate(leave.date_to);
      this.employeeService.updateLeave(leave)
      .subscribe((response) => { 
        console.log(leave);
        this.getLeaveData();
        this.successToast();
      },
      (err) => {
        this.errorToast();
      })
    }
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  // confirmDelete(): void {
  //   this.deleteModalRef.hide();
  // }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }

  checkPendingLeave() {
    for(let i=0; i<this.leaves.length; i++) {
      if(this.leaves[i].approval_status =="pending") {
        this.pendingLeave = true;
        console.log("pending ache!");
        break;
      }
    }
  }

  checkSickLeave() {
    for(let i=0; i<this.leaves.length; i++) {
      if(this.leaves[i].category =="sick" && this.leaves[i].approval_status == "approved") {
        this.sickLeave = true;
        console.log(" ache!");
        break;
      }
    }
  }

  checkEntertainmentLeave() {
    for(let i=0; i<this.leaves.length; i++) {
      if(this.leaves[i].category =="entertainment" && this.leaves[i].approval_status == "approved") {
        this.entertainmentLeave = true;
        console.log(" ache!");
        break;
      }
    }
  }

  checkCasualLeave() {
    for(let i=0; i<this.leaves.length; i++) {
      if(this.leaves[i].category =="casual" && this.leaves[i].approval_status == "approved") {
        this.casualLeave = true;
        console.log(" ache!");
        break;
      }
    }
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

  errorToast() {
    this.addToast({
      title: 'Error',
      msg: 'Operation not successful. Check your net connection.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }
}
