import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  loginData = { mobile_number: '', password: '' }
  message = '';
  data: any;

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.message = '';
    this.authenticationService.getlogin(this.loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('token', this.data.token);
      localStorage.setItem('role', this.data.role);
      localStorage.setItem('name', this.data.name);
      this.router.navigate(['dashboard']);
    }, err => {
      
      err = JSON.parse(err.error);
      console.log(err);
      this.message = err.msg; 
    });
  }

}
