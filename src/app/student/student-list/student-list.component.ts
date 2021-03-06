import { Component, Input, OnInit, Inject, TemplateRef } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentService } from '../student.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { Server } from '../../../utils/Server'
import { Student } from '../../../models/Student';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

const URL = Server.API_ENDPOINT + 'excel';
declare var jsPDF: any;

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  alumniStudent: any;
  position = 'bottom';
  role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  //role = "hallOfficer";
  public studentToBeSearched: Student = new Student();
  public studentToBeFiltered: Student = new Student();
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed: boolean = true;
  residenceFeesStatusData: any;
  selectedValue = ['name', 'registrationNumber'];
  bsValue = new Date();
  modalHeader: string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;
  public fileUploadModalRef: BsModalRef;
  public reportModalRef: BsModalRef;
  today = new Date();
  rooms: any;
  @ViewChild('fileInput') fileInput: ElementRef;
  uniqueClubList: any;
  residentialList: any;
  hasError: boolean;
  constructor(public http: Http,
    private modalService: BsModalService,
    private studentService: StudentService,
    private toastyService: ToastyService,
    private router: Router) {
  }

  ngOnInit() {
    this.today = new Date();
    if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
      this.getStudentList();
      this.getUniqueClubData();
      this.getRoomData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    headers: this.selectedValue
  };

  getUniqueClubData(){
    this.studentService.getUniqueClubList()
    .subscribe((response) => {
      this.uniqueClubList = response['clubs'];
      console.log(this.uniqueClubList);
    }, error => {
      this.errorToast();
    });
  }

  getResidenceFeeStatusData(studentReg) {
    this.studentService.getResidenceFeeStatusData(studentReg)
      .subscribe((response) => {
        console.log(response)
        this.residentialList = response;
      }, error => {
        this.errorToast();
      });
  }

  getRoomData() {
    this.studentService.getRoomList()
      .subscribe((response) => { 
        this.rooms = response;
        console.log(this.rooms);
      },
      (err) => {
        this.errorToast();
      })
  }

  downloadCSV(item) {
    let filteredStudent: any;
    this.studentService.searchSortStudent(item)
      .subscribe((response) => {
        this.successToast();
        filteredStudent = response;

        // let i = 0;
        // filteredStudent.forEach(stu=> {
        //   this.studentService.getResidenceFeeStatusData(stu.registrationNumber)
        //   .subscribe((response) => {
        //     filteredStudent[i]['residenceFeeStatusData']  = response
        //     i = i + 1;
        //   }, error => {
        //   });
        // });
        let filteredData: any = new Array();
        filteredStudent.forEach(std => {
          let temp = {};
          this.selectedValue.forEach(val => {
            // if(val == 'residenceFeeStatusData')
            // {
            //   let tempStr = "";
            //   console.log(std[0].residenceFeeStatusData);
            //   for(let i =0;i<std[val].length; i++){
            //     tempStr += std[val][i]['year'] + ": " + std[val][i]['is_paid'] + ";";
            //   }
            //   temp[val] = tempStr;
            // }
            // else{
            temp[val] = std[val];         
          });
          filteredData.push(temp);
        });
        //console.log(filteredData);

        new Angular5Csv(filteredData, "student_report_"+this.today, this.options);

      }, error => {
        this.errorToast();
      });


  }

  confirmDelete(student): void {
    console.log(student)
    this.deleteModalRef.hide();
    this.studentService.deleteStudent(student)
      .subscribe((response) => {
        this.successToast();
        let index = this.data.indexOf(student);
        this.data.splice(index, 1);
      }, error => {
        this.errorToast();
      });
  }

  getCleanUpData() {
    this.studentService.getCleanUpData()
      .subscribe((response) => {
        this.getStudentList();
        console.log(response);
        this.alumniStudent = response;
        var doc = new jsPDF();
        var col = ["Name", "Reg. No.", "Session", "Status", "Room", "Department", "Class/Year", "Mobile"];
        var rows = [];


        for (var key in this.alumniStudent) {
          var temp = [this.alumniStudent[key]['name'], this.alumniStudent[key]['registrationNumber'], this.alumniStudent[key]['session'], this.alumniStudent[key]['residentialStatus'], this.alumniStudent[key]['room'], this.alumniStudent[key]['subject_name'], this.alumniStudent[key]['class_year_semester'], this.alumniStudent[key]['mobileNumber']];
          rows.push(temp);
        }

        doc.autoTable(col, rows);

        doc.save('alumni_student_list.pdf');
      }, error => {
        this.errorViewToast();
      });
  }


  getStudentList() {
    this.studentService.getStudentList()
      .subscribe((response) => {
      
        this.data = response;
        // let i = 0;
        // this.data.forEach(stu=> {
        //   this.studentService.getResidenceFeeStatusData(stu.registrationNumber)
        //   .subscribe((response) => {
        //     this.data[i]['residenceFeeStatusData']  = response
        //     i = i + 1;
        //     console.log(this.data)
        //   }, error => {
        //   });
        // })
        // this.residentialList = this.getResidenceFeeStatusData(this.data.)
      }, error => {
        this.errorViewToast();
      });
  }

  confirmUpdateStudent(student): void {
    
    if (student.room_no == 0) {
      student.room_no = -1;
    }
    if (student.residentialStatus=='Non-resident'){
      student.room_no = -1;
    }
    if (student.residentialStatus!='Non-resident' && student.room_no== -1){
      this.hasError = true;
    }
    else {
      this.modalRef.hide();
      this.studentService.updateStudent(student)
      .subscribe((response) => {
        this.successToast();
        this.getStudentList();
      }, error => {
        this.errorToast();
      });
    }
    

  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if (type == "add") this.modalHeader = "";
    else this.modalHeader = "তথ্য সংশোধন";
  }

  public openUpdateStudentModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public openFileUploadModal(template: TemplateRef<any>) {
    this.fileUploadModalRef = this.modalService.show(template);
  }

  public openReportModal(template: TemplateRef<any>) {
    this.reportModalRef = this.modalService.show(template);
  }

  change(e, type) {
    if (type) {
      this.selectedValue.push(e.target.defaultValue);
    }
    else {
      let index = this.selectedValue.indexOf(e.target.defaultValue);
      this.selectedValue.splice(index, 1);
    }
  }

  confirm(): void {
    console.log('Confirmed!');
    this.modalRef.hide();
  }

  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
    this.getStudentList();
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  declineDelete(): void {
    this.deleteModalRef.hide();
  }

  searchSortStudent(student) {
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

  errorFileToast(title) {
    this.addToast({
      title: 'Error',
      msg: title,
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
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

  convertToPdf() {
    var doc = new jsPDF();
    var col = ["Name", "Reg. No.", "Session", "Status", "Room", "Department", "Class/Year", "Mobile"];
    var rows = [];

    for (var key in this.data) {
      if (this.data[key]['room_no'] == 0) {
        this.data[key]['room_no'] = null;
      }
      var temp = [this.data[key]['name'], this.data[key]['registrationNumber'], this.data[key]['session'], this.data[key]['residentialStatus'], this.data[key]['room_no'], this.data[key]['subject_name'], this.data[key]['class_year_semester'], this.data[key]['mobileNumber']];
      rows.push(temp);
    }

    doc.autoTable(col, rows);

    doc.save('student_list.pdf');
  }

  fileChange(event) {
    let tempData = new FormData();
    this.fileUploadModalRef.hide();
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      console.log(file)
      //tempData.append("name", 'mou');
      let temp = {}
      temp['excel'] = file
      tempData.append('excel', file);
      console.log(tempData.get('excel'));
      this.studentService.uploadFile(tempData)
        .subscribe((response) => {
          console.log(response)
          if (response['status']=='done'){
            this.successToast();
            this.getStudentList();
          }
          // else this.errorFileToast(response['message']);
        }, error => {
          let errorMessage = JSON.parse(error.error);
          // console.log(errorMessage['message'])
          this.errorFileToast(errorMessage['message']);
        });
    }
  }


}
