import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  
    constructor(private loginService: LoginService,
      private _router: Router,
      private _activatedRoute: ActivatedRoute) {
      }

  
  
   

  

  ngOnInit(): void {
  }

  movetoregister() {
    this._router.navigate(['main/register']);
  }

  movetologin() {
    // this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
    this._router.navigate(['main/login']);
  }
}
