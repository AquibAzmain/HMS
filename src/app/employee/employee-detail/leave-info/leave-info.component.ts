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
  role = "hallOfficer"; //localStorage.getItem('role');
  constructor(public http: Http, private modalService: BsModalService,
    private route: ActivatedRoute,
    private employeeService : EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.employeeService.getLeaveList(this.employeeId)
      .subscribe((response) => { 
        this.leaves = response;
      });
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
    this.modalRef.hide();
    this.leaveToBeAdded.approval_status = "pending";
    this.leaveToBeAdded.employeeId = this.employeeId;
    this.employeeService.addLeave(this.leaveToBeAdded)
    .subscribe((response) => { 
      ////////////////////alert//////////////////////////
      this.leaves.push(this.leaveToBeAdded);
    });
  }

  confirmUpdateLeave(leave): void {
    this.modalRef.hide();
    this.employeeService.updateLeave(leave)
    .subscribe((response) => { 
      console.log(leave);
       ////////////////////alert//////////////////////////
    });
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
}
