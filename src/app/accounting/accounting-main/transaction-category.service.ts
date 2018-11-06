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

  getIncomeCategoryList(category: Transaction_Category) : Observable<Transaction_Category[]> {
    return this.http.get<Transaction_Category[]>(Server.API_ENDPOINT + 'transaction_categories');
  }

  addCategory(category: Transaction_Category) : Observable<Transaction_Category>{
    return this.http.post<Transaction_Category>(Server.API_ENDPOINT +'transaction_categories', JSON.stringify(category), this.httpOptions);
  }

  
}
