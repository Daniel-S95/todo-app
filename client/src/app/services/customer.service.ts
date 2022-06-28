import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from '../models/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  public getAllCustomers() {
    return this._http.get<ICustomer[]>('http://localhost:3001/customers');
  }
}
