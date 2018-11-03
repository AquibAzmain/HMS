import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../../models/Employee';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'employee-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';
  role = localStorage.getItem('role'); //"hallOfficer";
  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute,
    private employeeService : EmployeeService,
    private router: Router) { }

  ngOnInit() {
    //console.log(employeeId);
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getEmployeeData();
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  getEmployeeData() {
    let employeeId = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(employeeId)
    .subscribe((response) => { 
      this.employee = response;
    });
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  confirmUpdateEmployee(): void {
    if(this.employee.joining_date!=null) {
      this.employee.joining_date = this.formatDate(this.employee.joining_date);
    }
    this.employeeService.updateEmployee(this.employee)
    .subscribe((response) => { 
      this.toggleEditProfile();
      this.getEmployeeData();
      console.log(this.employee);
       ////////////////////alert//////////////////////////
    });
  }

  public formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();
  
    return day + '/' + monthIndex + '/' + year;
  }
}
