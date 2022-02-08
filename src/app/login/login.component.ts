import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private loginService:LoginService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {
  }

  // isValid(controlName) {
  //   return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  // }

  login() {
    console.log(this.loginForm);
    var formData: any = new FormData();
    formData.set("username", this.loginForm.value.username);
    formData.set("password", this.loginForm.value.password);
    this.loginService.login(formData).subscribe(resp=>{
      console.log(resp);
      localStorage.setItem('token', resp.token);
      console.log('Bearer '+localStorage.getItem('token'))
      localStorage.setItem('username', resp.username);
      
      this._router.navigate(['/dashboard']);
      
    },err=>{
      console.log(err);
      
    });
      
    // if (this.loginForm.valid) {
    //   this._myservice.login(this.loginForm)
    //     .subscribe(
    //       data => {
    //         console.log(data);
    //       // localStorage.setItem('token', data.toString());
    //         this._router.navigate(['/dash']);
    //       },
    //       error => { }
    //     );
    // }
  }

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }
}
