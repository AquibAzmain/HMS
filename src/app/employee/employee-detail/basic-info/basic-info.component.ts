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
  role = "hallOfficer";
  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute,
    private employeeService : EmployeeService,
    private router: Router) { }

  ngOnInit() {
    let employeeId = this.route.snapshot.paramMap.get('id');
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.employeeService.getEmployeeById(employeeId)
      .subscribe((response) => { 
        this.employee = response;
      });
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  confirmUpdateEmployee(): void {
    this.employeeService.updateEmployee(this.employee)
    .subscribe((response) => { 
      this.toggleEditProfile();
      console.log(this.employee);
       ////////////////////alert//////////////////////////
    });
  }
}
