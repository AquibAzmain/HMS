import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Leave } from '../../../../models/Leave';
import { EmployeeService } from '../../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-info',
  templateUrl: './leave-info.component.html',
  styleUrls: ['./leave-info.component.css']
})
export class LeaveInfoComponent implements OnInit {
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
  role = localStorage.getItem('role'); //"hallOfficer"; 
  confirmAddError = false;
  confirmUpdateError = false;

  constructor(public http: Http, private modalService: BsModalService,
    private route: ActivatedRoute,
    private employeeService : EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    console.log(this.role);
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getLeaveData();
    }
    else {
      this.router.navigate(['/**']);
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
      },
      (err) => {
        console.log(err)
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
        ////////////////////alert//////////////////////////
        this.getLeaveData();
      },
      (err) => {
        console.log(err)
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
        ////////////////////alert//////////////////////////
      },
      (err) => {
        console.log(err)
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

  public formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();
  
    return day + '/' + monthIndex + '/' + year;
  }
}
