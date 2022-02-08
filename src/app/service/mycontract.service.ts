import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycontractService {
  private baseUrl = 'http://localhost:9191/contract';
  constructor(private _http: HttpClient) { }

  getContract(id: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/${id}`);
  }

  createContract(contract: Object): Observable<Object> {
    return this._http.post(`${this.baseUrl}`+'/add', contract);
  }

  updateContract(id: number, value: any): Observable<Object> {
    return this._http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteContract(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getContractList(): Observable<any> {
    return this._http.get(`${this.baseUrl}`+'/findAll');
  }
}
