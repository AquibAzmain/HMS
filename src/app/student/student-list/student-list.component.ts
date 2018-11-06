import { Component, Input, OnInit, Inject, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentService } from '../student.service';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {Server} from '../../../utils/Server'
import { Student } from '../../../models/Student';


const URL = Server.API_ENDPOINT+'excel';
declare var jsPDF: any;

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  position = 'bottom';
  //role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  role = "hallOfficer";
  public uploader:FileUploader = new FileUploader({url: URL});
  public studentToBeSearched: Student = new Student();

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  bsValue = new Date();
  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;
  public fileUploadModalRef :BsModalRef; 
  
  constructor(public http: Http, 
    private modalService: BsModalService,
    private studentService: StudentService,
    private toastyService: ToastyService,
    private router: Router) { }

  ngOnInit() {
    // this.http.get(`assets/data/data.json`)
    // .subscribe((data) => {
    //   this.data = data.json();
    // });
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
    }
    else {
      this.router.navigate(['/**']);
    }
    this.getStudentList();

  }

  makePDF(){
    let doc = new jsPDF();
    var col = ["Id", "TypeID","Accnt","Amnt","Start","End","Contrapartida"];
    var rows = [];

var rowCountModNew = [
["1721079361", "0001", "2100074911", "200", "22112017", "23112017", "51696"],
["1721079362", "0002", "2100074912", "300", "22112017", "23112017", "51691"],
["1721079363", "0003", "2100074913", "400", "22112017", "23112017", "51692"],
["1721079364", "0004", "2100074914", "500", "22112017", "23112017", "51693"]
]


rowCountModNew.forEach(element => {
      rows.push(element);

    });


    //this.doc.autoTable(col, rows);
    doc.table(7,5,rowCountModNew,col,{
      left:80,
      right:10,
      top:500,
      bottom: 50,
      width: 60,
      autoSize:false,
      printHeaders: true
      });
    doc.save('Test.pdf');
  }

  confirmDelete(student): void {
    console.log(student)
    this.deleteModalRef.hide();
    this.studentService.deleteStudent(student)
    .subscribe((response) => { 
      let index = this.data.indexOf(student);
      this.data.splice(index,1);
    }, error => {
      this.errorToast();
    });
  }

  getStudentList(){
    this.studentService.getStudentList()
    .subscribe((response) => { 
      console.log(response);
      this.data = response;
    }, error => {
      this.errorViewToast();
    });
  }

  confirmUpdateStudent(student): void {
    this.modalRef.hide();
    this.studentService.updateStudent(student)
      .subscribe((response) => {
        this.successToast();
        this.getStudentList();
      }, error => {
        this.errorToast();
      });

  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "";
    else this.modalHeader = "তথ্য সংশোধন";
  }

  public openUpdateStudentModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public openFileUploadModal(template: TemplateRef<any>) {
    this.fileUploadModalRef = this.modalService.show(template);
  }

  confirm(): void {
    console.log('Confirmed!');
    this.modalRef.hide();
  }
 
  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }

  searchSortStudent(student){
    this.studentService.searchSortStudent(student)
      .subscribe((response) => {
        this.successToast();
        this.data = response;
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

  successToast(){
    this.addToast({
      title:'Success', 
      msg:'Operation successful.', 
      timeout: 5000, theme:'material', 
      position:'bottom', 
      type:'success'
    });
  }

  errorToast(){
    this.addToast({
      title:'Error', 
      msg:'Operation not successful.', 
      timeout: 5000, theme:'material', 
      position:'bottom', 
      type:'error'
    });
  }

  errorViewToast() {
    this.addToast({
      title: 'Error',
      msg: 'Check Internet Connection.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

  convertToPdf(){
    var doc = new jsPDF();
    var col = ["Name", "Reg. No.", "Session", "Status", "Room","Department", "Class/Year", "Mobile"];
    var rows = [];


    for(var key in this.data){
        var temp = [this.data[key]['name'], this.data[key]['registrationNumber'], this.data[key]['session'], this.data[key]['residentialStatus'], this.data[key]['room'], this.data[key]['subject_name'],this.data[key]['class_year_semester'], this.data[key]['mobileNumber']];
        rows.push(temp);
    }

    doc.autoTable(col, rows);

    doc.save('student_list.pdf');
  }


}
