import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../../models/Student';
import { StudentService } from '../../student.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { Remark } from '../../../../models/Remark';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  position = 'bottom';
  userName = localStorage.getItem('name');
  today = this.formatDate(new Date());
  role = "hallOfficer"; //localStorage.getItem('role'); 
  student: Student = new Student();
  commentObject: Remark = new Remark();
  comments: Remark[]=[];
  userData:any;
  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router,
    private toastyService: ToastyService) { }

    ngOnInit() {
      if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer" || this.role == "admin")) {
        this.getStudentData();
        this.getUserData();
        
      }
      else {
        this.router.navigate(['/**']);
      }
    }

    getUserData(){
      this.studentService.getProfile()
      .subscribe((response) => { 
        console.log(response);
        this.userData = response;
        this.getComments();
      }, error => {
        this.errorToast();
      });
    }

    getComments(){
      this.studentService.getCommentList(this.student)
      .subscribe((response) => { 
        console.log(response);
        this.comments = response;
      }, error => {
        this.errorToast();
      });
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

    postComment(comment){
      comment.registrationNumber = this.student.registrationNumber;
      comment.date = this.today;
      comment.user = this.userData.mobile_number;

      console.log(comment);

      this.studentService.addComment(comment)
          .subscribe((response) => {
            this.commentObject.comment ="";
            this.successToast();
            this.getComments();
          }, error => {
            this.errorToast();
          });
    }

    public formatDate(date) {
      var day = date.getDate();
      var monthIndex = date.getMonth()+1;
      var year = date.getFullYear();
      return day + '/' + monthIndex + '/' + year;
    }
  
    confirmUpdateStudent(): void {
      this.studentService.updateStudent(this.student)
        .subscribe((response) => {
          this.getStudentData();
          this.successToast();
        }, error => {
          this.errorToast();
        });
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