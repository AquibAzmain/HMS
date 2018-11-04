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
  position = 'bottom';
  //role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  role = "hallOfficer";
  students: Student[] = [];
  studentToBeAdded: Student = new Student();

  constructor(private router: Router, private studentService : StudentService, private toastyService: ToastyService) { }

  ngOnInit() {
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  addStudent(): void {
    console.log(this.studentToBeAdded);
    if(this.studentToBeAdded.dateOfBirth != null){
      this.studentToBeAdded.dateOfBirth = this.formatDate(this.studentToBeAdded.dateOfBirth);
    }
    this.studentService.addStudent(this.studentToBeAdded)
    .subscribe((response) => {    
      this.successToast();
      this.router.navigate(['/student/details/'+this.studentToBeAdded.registrationNumber]);
    }, error => {
      this.errorToast();
    });

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
