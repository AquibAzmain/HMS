import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../../utils/Server'
import { Transaction_SubCategory } from '../../../models/Transaction_SubCategory';
@Injectable()
export class TransactionSubcategoryService {

  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  constructor(private http: HttpClient) { }

  getSubCategoryList() : Observable<Transaction_SubCategory[]> {
    return this.http.get<Transaction_SubCategory[]>(Server.API_ENDPOINT + 'transaction_subcategories');
  }

  addSubCategory(subCategory: Transaction_SubCategory) : Observable<Transaction_SubCategory>{
    return this.http.post<Transaction_SubCategory>(Server.API_ENDPOINT +'transaction_subcategories', JSON.stringify(subCategory), this.httpOptions);
  }
  
}
