import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  submitRegister(body:any){
    return this._http.post('http://localhost:9191/login/register', body,{
      observe:'body'
    });
  }
  login(data:any):Observable<any>{
    return this._http.post('http://localhost:9191/login',data);
  }
}
