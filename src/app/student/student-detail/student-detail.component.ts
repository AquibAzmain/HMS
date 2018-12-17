import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../models/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router) { }

  role = localStorage.getItem('role'); 
  student: Student = new Student();
  
  ngOnInit() {
    if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
      this.getStudentData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  getStudentData() {
    let studentReg = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentByReg(studentReg)
      .subscribe((response) => {
        this.student = response;
        console.log(response);
      });
  }

  

}
