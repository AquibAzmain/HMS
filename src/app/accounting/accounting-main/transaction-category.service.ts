import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../../utils/Server'
import { Transaction_Category } from '../../../models/Transaction_Category';


@Injectable()
export class TransactionCategoryService {

  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  constructor(private http: HttpClient) { }

  getCategoryList() : Observable<Transaction_Category[]> {
    return this.http.get<Transaction_Category[]>(Server.API_ENDPOINT + 'transaction_categories');
  }
}
