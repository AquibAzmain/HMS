import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { Router} from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css',
  '../../../../node_modules/ng2-toasty/style-bootstrap.css',
  '../../../../node_modules/ng2-toasty/style-default.css',
  '../../../../node_modules/ng2-toasty/style-material.css'],
  providers: [ToastyService],
  encapsulation: ViewEncapsulation.None
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordData = { mobile_number: '', password: '' }
  confirm_password = '';
  data: any;
  message = '';
  passwordNotMatched = '';
  position = 'bottom';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  
  constructor(private http: HttpClient, 
    private authenticationService: AuthenticationService, 
    private toastyService: ToastyService, 
    private router: Router) { }

  ngOnInit() {
  }

  forgetPasswordRequest(){
    this.passwordNotMatched = '';
    this.message = '';
    if(this.forgetPasswordData.password !== this.confirm_password){
      this.passwordNotMatched = "Password does not matched.";
      return;
    }
    this.authenticationService.forgetPasswordRequest(this.forgetPasswordData).subscribe(resp => {
      this.data = resp;
      this.addToast({title:'Success', msg:'Request Send successfully.', timeout: 5000, theme:'material', position:'bottom', type:'success'});
      this.router.navigate(['authentication/login']);
    }, err => {
      err = JSON.parse(err.error);
      console.log(err);
      this.message = err.status;
    })
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

}
