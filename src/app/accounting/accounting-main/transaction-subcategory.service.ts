import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../../utils/Server'
import { Transaction_SubCategory } from '../../../models/Transaction_SubCategory';
import 'rxjs/add/observable/forkJoin';
@Injectable()
export class TransactionSubcategoryService {

  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  constructor(private http: HttpClient) { }

  getSubCategoryList(s:string) : Observable<Transaction_SubCategory[]> {
    return this.http.get<Transaction_SubCategory[]>(Server.API_ENDPOINT + 'transaction_subcategories?parent_cat=' + s);
  }

  addSubCategory(subCategory: Transaction_SubCategory) : Observable<Transaction_SubCategory>{
    return this.http.post<Transaction_SubCategory>(Server.API_ENDPOINT +'transaction_subcategories', JSON.stringify(subCategory), this.httpOptions);
  }

  getIncomeSubCat() : Observable<any[]> {
    let response1 = this.http.get<Transaction_SubCategory[]>(Server.API_ENDPOINT + 'transaction_subcategories?parent_cat=University funding');
    let response2 = this.http.get<Transaction_SubCategory[]>(Server.API_ENDPOINT + "transaction_subcategories?parent_cat=Hall's money");
    let response3 = this.http.get<Transaction_SubCategory[]>(Server.API_ENDPOINT + 'transaction_subcategories?parent_cat=Miscellaneous income');
    return Observable.forkJoin([response1, response2, response3]);
  }

  getExpenseSubCat() : Observable<any[]> {
    let response1 = this.http.get<Transaction_SubCategory[]>(Server.API_ENDPOINT + 'transaction_subcategories?parent_cat=University expense');
    let response2 = this.http.get<Transaction_SubCategory[]>(Server.API_ENDPOINT + "transaction_subcategories?parent_cat=Miscellaneous expense");
    return Observable.forkJoin([response1, response2]);
  }
  
}
