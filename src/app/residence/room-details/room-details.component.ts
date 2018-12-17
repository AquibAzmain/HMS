import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../../models/Room';
import { ResidenceService } from '../residence.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { Http } from '@angular/http';
import { Student } from '../../../models/Student';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  position = 'bottom';
  editProfile = true;
  editProfileIcon = 'icofont-edit';
  students: Student[] = [];
  suggestionStudents: Student[] = [];
  public data: any;
  public studentList: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed: boolean = true;
  modalHeader: string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;
  room: Room = new Room();
  houseTutors: any;
  assignedHouseTutorName:any;
  studentRegToBeAddedToRoom: "";
  numberOfStudentInRoom: number;
  role = localStorage.getItem('role'); //"hallOfficer";
  constructor(private route: ActivatedRoute, private modalService: BsModalService, private residenceService: ResidenceService,
    private router: Router,
    private toastyService: ToastyService, private http: Http) { }

  ngOnInit() {
    // this.http.get(`assets/data/room-Student.json`)
    // .subscribe((blockData) => {
    //   this.data = blockData.json();
    // });

    //console.log(employeeId);
    if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
      this.getRoomData();
      this.getStudentList();
      this.getSuggestionForAdd();
      this.getHouseTutorList();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  getRoomData() {
    this.getHouseTutorList();
    let roomNumber = this.route.snapshot.paramMap.get('roomNumber');
    this.residenceService.getRoomById(roomNumber)
    .subscribe((response) => {
      this.room = response;
      this.getHouseTutorName(this.room.block_id);
    },
    (err) => {
      this.errorToast();
    });
  }

  getHouseTutorName(assignedHouseTutor) {
    this.residenceService.getUserById(assignedHouseTutor)
    .subscribe((response) => {
      this.assignedHouseTutorName = response.name
    },
    (err) => {
      this.errorToast();
    });
  }
  

  addStudentToRoom(student) {
    console.log(student);
    let studentAdd = {
      registrationNumber: this.studentRegToBeAddedToRoom,
      session: student.session,
      name: student.name,
      residentialStatus: "Resident",
      room_no: this.room.roomNumber
    }
    console.log(studentAdd);

    this.residenceService.updateStudent(studentAdd)
      .subscribe((response) => {
        this.successToast();
        this.getRoomData();
        this.modalRef.hide();
      }, error => {
        this.errorToast();
      });
  }

  onSelectionChange(entry) {
    this.studentRegToBeAddedToRoom = entry;
  }

  getHouseTutorList(){
    this.residenceService.getHouseTutors()
    .subscribe((response) => {
      this.houseTutors = response;
    });
  }

  getStudentList(){
    let roomNumber = this.route.snapshot.paramMap.get('roomNumber');
    this.residenceService.getStudentList(roomNumber)
    .subscribe((response) => { 
      console.log(response);
      this.students = response;
      this.numberOfStudentInRoom = response.length;
    }, error => {
      this.errorToast();
    });
  }

  getSuggestionForAdd(){
    this.residenceService.getSuggestionForAdd()
    .subscribe((response) => { 
      console.log(response);
      this.suggestionStudents = response;
    }, error => {
      this.errorToast();
    });
  }

  confirmUpdateRoom(): void {
    if(this.room.capacity==null){
      this.room.capacity =0;
    }
    this.residenceService.updateRoom(this.room)
      .subscribe((response) => {
        this.toggleEditProfile();
        this.getRoomData();
        console.log(this.room);
        this.successToast();
      },
        (err) => {
          this.errorToast();
        })
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if (type == "add") this.modalHeader = "কক্ষে নতুন ছাত্র যুক্ত করুন";
    else this.modalHeader = "তথ্য সংশোধন";
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

  confirmDelete(): void {
    this.deleteModalRef.hide();
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
      msg: 'Operation not successful. Check your net connection',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

}
