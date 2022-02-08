import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  username;
  constructor(private loginService:LoginService,
  private _router: Router) { 
    // this.myService.getUserName()
    // .subscribe(
    //   data => this.username= data.toString(),
    //   error => this._router.navigate(['/main/login'])
    // )
  }

  ngOnInit() {
    this.username=  localStorage.getItem('')
  
  }

  // logout(){
  //   this.tokenservice.signOut();
  //   this._router.navigate(['/main/login']);
  // }
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/main/login']);
  }
}
