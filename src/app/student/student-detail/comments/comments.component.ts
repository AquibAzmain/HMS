import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../../models/Student';
import { StudentService } from '../../student.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Remark } from '../../../../models/Remark';
import { StudentClub } from '../../../../models/StudentClub';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  position = 'bottom';
  userName = localStorage.getItem('name');
  userID = localStorage.getItem('id');
  today = this.formatDate(new Date());
  role = "hallOfficer"; //localStorage.getItem('role'); 
  student: Student = new Student();
  commentObject: Remark = new Remark();
  comments: Remark[]=[];
  userData:any;
  clubList: StudentClub[] = [];
  uniqueClubList : any;
  clubToBeAdded: StudentClub;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;
  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router,
    private toastyService: ToastyService,
    private modalService: BsModalService) { }

    ngOnInit() {
      console.log(this.userID);
      if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer" || this.role == "admin")) {
        this.getStudentData();
        this.getUserData();
        this.getComments();
        this.getUniqueClubData();
        this.getClubData();
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
      }, error => {
        this.errorToast();
      });
    }

    getComments(){
      let studentReg = this.route.snapshot.paramMap.get('id');
      this.studentService.getCommentList(studentReg)
      .subscribe((response) => { 
        console.log(response);
        this.comments = response;
      }, error => {
        this.errorToast();
      });
    }

    getUsername(userID){
      this.studentService.getUserById(userID)
      .subscribe((response) => {
        console.log(response.name);
      },
      (err) => {
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
      comment.user = this.userID;

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

    getClubData() {
      let studentReg = this.route.snapshot.paramMap.get('id');
      this.studentService.getClubData(studentReg)
        .subscribe((response) => {
          console.log(response)
          this.clubList = response;
        }, error => {
          this.errorToast();
        });
    }

    getUniqueClubData(){
      this.studentService.getUniqueClubList()
      .subscribe((response) => {
        console.log(response);
        this.uniqueClubList = response;
      }, error => {
        this.errorToast();
      });
    }

    confirmAddClub(): void {
      this.modalRef.hide();
      let studentReg = this.route.snapshot.paramMap.get('id');
      this.clubToBeAdded.registrationNumber = studentReg;
      this.studentService.addClub(this.clubToBeAdded)
        .subscribe((response) => {
          this.getClubData();
          this.getUniqueClubData();    
          this.successToast();
        }, error => {
          this.errorDuplicateClubToast();
        });
    }

    confirmUpdateClub(club): void {
      this.modalRef.hide();
      let studentReg = this.route.snapshot.paramMap.get('id');
      club.registrationNumber = studentReg;
      this.studentService.updateClub(club)
        .subscribe((response) => {
          this.getClubData();
          this.successToast();
        }, error => {
          this.errorToast();
        });
    }

    confirmDeleteClub(club): void {
      this.deleteModalRef.hide();
      this.studentService.deleteClub(club)
      .subscribe((response) => { 
        this.getClubData()
        this.successToast();
        },
        (err) => {
          this.errorToast();
        })
    }

    public openAddClubModal(template: TemplateRef<any>) {
      this.clubToBeAdded = new StudentClub();
      this.modalRef = this.modalService.show(template);
    }
  
    public openUpdateClubModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
  
    public openDeleteModal(template: TemplateRef<any>) {
      this.deleteModalRef = this.modalService.show(template);
    }
  
    decline(): void {
      console.log('Declined!');
      this.modalRef.hide();
      this.getClubData();
    }
  
    declineDelete(): void {
      this.deleteModalRef.hide();
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

    errorDuplicateClubToast() {
      this.addToast({
        title: 'Error',
        msg: 'Operation not successful. Same club/society in not allowed',
        timeout: 5000, theme: 'material',
        position: 'bottom',
        type: 'error'
      });
    }
}