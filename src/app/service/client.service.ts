import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientDAO } from '../models/client';
const headers= new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:9191/clients';
  constructor(private _http: HttpClient) { }

  addClient(client: ClientDAO): Observable<Object> {
    headers.set('Authorization','Bearer '+localStorage.getItem("token"))
    return this._http.post(`${this.baseUrl}`+'/add', client,{headers});
  }
  getClientList(): Observable<any> {
    headers.set('Authorization','Bearer '+localStorage.getItem("token"))
    return this._http.get(`${this.baseUrl+'/findAll'}`,{headers});
  }
  deleteClient(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
