import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../../../models/Student';
import { StudentService } from '../../student.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  alumni:boolean = true;
  position = 'bottom';
  //role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  role = "hallOfficer";
  students: Student[] = [];
  studentToBeAdded: Student = new Student();
  today = new Date();
  hasError = false;
  constructor(private router: Router, private studentService : StudentService, private toastyService: ToastyService) { }

  ngOnInit() {
    this.today = new Date();
    console.log(this.today)
    this.hasError = false;
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  addStudent(): void {
    console.log(this.studentToBeAdded);
    if(this.studentToBeAdded.dateOfBirth != null){
      this.studentToBeAdded.dateOfBirth = this.formatDate(this.studentToBeAdded.dateOfBirth);
    }
    if(this.studentToBeAdded.room_no == null  ){
      this.studentToBeAdded.room_no = -1;
    }
    if(this.studentToBeAdded.registrationNumber == null || this.studentToBeAdded.name == null){
      this.hasError = true;
      this.requiredFillMissingToast();
    }
    else if (this.studentToBeAdded.registrationNumber.match(/[a-z]/i)) {
      this.errorToast('Error in Registration Number.');
    }
    else if (this.studentToBeAdded.mobileNumber.match(/[a-z]/i)) {
      this.errorToast('Error in Mobile Number.');
    }
    else if (this.studentToBeAdded.local_annual_income<0) {
      this.errorToast('Error in Annual Income.');
    }
    else if (this.studentToBeAdded.legal_monthly_income<0) {
      this.errorToast('Error in Monthly Income.');
    }
    else if (this.studentToBeAdded.sscGPA < 0 || this.studentToBeAdded.sscGPA > 5) {
      this.errorToast('Error in SSC GPA');
    }
    else if (this.studentToBeAdded.hscGPA < 0 || this.studentToBeAdded.hscGPA > 5) {
      this.errorToast('Error in HSC GPA');
    }
    else {
      this.hasError = false;      
      this.studentService.addStudent(this.studentToBeAdded)
      .subscribe((response) => {    
        this.successToast();
        this.router.navigate(['/student/details/'+this.studentToBeAdded.registrationNumber]);
      }, error => {
        this.errorToast('Operation not successful.');
      });
    }

  }

  navigateToList(){
    this.router.navigate(['/student']);
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
    if (this.studentToBeAdded.room_no == -1) {
      this.studentToBeAdded.room_no = null; 
    }
  }

  requiredFillMissingToast() {
    this.addToast({
      title: 'Error',
      msg: 'Name and registration number must be filled.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
    if (this.studentToBeAdded.room_no == -1) {
      this.studentToBeAdded.room_no = null; 
    }
  }
}
