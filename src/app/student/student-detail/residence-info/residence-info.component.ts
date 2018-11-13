import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../../models/Student';
import { StudentService } from '../../student.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ResidentialFee } from '../../../../models/ResidentialFee';
@Component({
  selector: 'app-residence-info',
  templateUrl: './residence-info.component.html',
  styleUrls: ['./residence-info.component.css']
})
export class ResidenceInfoComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';

  position = 'bottom';
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;
  role = "hallOfficer"; //localStorage.getItem('role'); 
  student: Student = new Student();
  yearToBeAdded: ResidentialFee = new ResidentialFee();
  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router,
    private toastyService: ToastyService,
    private modalService: BsModalService) { }

  ngOnInit() {
    if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer" || this.role == "admin")) {
      this.getStudentData();
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  getStudentData() {
    let studentReg = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentByReg(studentReg)
      .subscribe((response) => {
        this.student = response;
      }, error => {
        this.errorToast();
      });
  }

  confirmUpdateStudent(): void {
    this.studentService.updateStudent(this.student)
      .subscribe((response) => {
        this.toggleEditProfile();
        this.getStudentData();
        this.successToast();
      }, error => {
        this.errorToast();
      });
  }

  public openAddResidentialStatusModal(template: TemplateRef<any>) {
  this.yearToBeAdded = new ResidentialFee();
    this.modalRef = this.modalService.show(template);
  }

  public openUpdateResidentialStatusModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
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
      msg: 'Operation not successful.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

}