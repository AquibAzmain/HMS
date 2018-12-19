import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../../models/Employee';
import { EmployeeService } from '../../employee.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'employee-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  position = 'bottom';
  editProfile = true;
  editProfileIcon = 'icofont-edit';
  role = localStorage.getItem('role'); //"hallOfficer";
  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute,
    private employeeService : EmployeeService,
    private router: Router,
    private toastyService: ToastyService) { }

  ngOnInit() {
    //console.log(employeeId);
    if((this.role == "provost" || this.role == "hallOfficer")) {
      this.getEmployeeData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  getEmployeeData() {
    let employeeId = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(employeeId)
    .subscribe((response) => { 
      this.employee = response;
    },
    (err) => {
      this.errorToast('Operation not successful. Check your net connection.');
    })
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
    this.getEmployeeData();
  }

  confirmUpdateEmployee(): void {
    if(this.employee.joining_date!=null) {
      this.employee.joining_date = this.formatDate(this.employee.joining_date);
    }
    if(this.employee.name==null || this.employee.contact_number==null || this.employee.job_title==null ) {
      this.errorToast("")
      this.errorToast('Please Fillup Required Fields');
      console.log("error")
    }
    if(this.employee.name.length == 0 || this.employee.contact_number.length == 0 || this.employee.job_title.length == 0 ) {
      this.errorToast('Please Fillup Required Fields');
      console.log("error");
    }
    else if (this.employee.contact_number.match(/[a-z]/i)) {
      this.errorToast('Error in Mobile Number.');
    }
    else {
      this.employeeService.updateEmployee(this.employee)
      .subscribe((response) => { 
        this.toggleEditProfile();
        this.getEmployeeData();
        console.log(this.employee);
        this.successToast();
      },
      (err) => {
        this.errorToast('Operation not successful. Check your net connection.');
      })
    }
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

  errorToast(message) {
    this.addToast({
      title: 'Error',
      msg: message,
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

}
