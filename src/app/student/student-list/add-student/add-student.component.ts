import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../../../models/Student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  //role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  role = "hallOfficer";
  students: Student[] = [];
  studentToBeAdded: Student = new Student();

  constructor(private router: Router, private studentService : StudentService) { }

  ngOnInit() {
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  addStudent(): void {
    console.log(this.studentToBeAdded);
    // if(this.studentToBeAdded.joining_date != null){
    //   this.studentToBeAdded.joining_date = this.formatDate(this.studentToBeAdded.joining_date);
    // }
    this.studentService.addStudent(this.studentToBeAdded)
    .subscribe((response) => { 
      
      ////////////////////alert//////////////////////////
      //this.studentToBeAdded = response;
      //this.getEmployeeData();
    });
  }

  navigateToList(){
    this.router.navigate(['/student']);
  }

}
