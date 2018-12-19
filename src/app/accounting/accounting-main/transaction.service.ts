import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../../utils/Server'
import { Transaction } from '../../../models/Transaction';
import { Transaction_History } from '../../../models/Transaction_History';
import { Report } from '../../../models/Report';
import { Balance } from '../../../models/Balance';
import 'rxjs/add/observable/forkJoin';
@Injectable()
export class TransactionService {

  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  constructor(private http: HttpClient) { }

  getBalance() : Observable<Balance> {
    return this.http.get<Balance>(Server.API_ENDPOINT + 'bank_balance');
  }

  getIncomeExpense(): Observable<any[]>{
    let response1 = this.http.get<Transaction[]>(Server.API_ENDPOINT + 'income_transactions');
    let response2 = this.http.get<Transaction[]>(Server.API_ENDPOINT + 'expense_transactions');
    return Observable.forkJoin([response1, response2]);
  }

  getTransactionHistory(tranid: number) : Observable<Transaction_History[]> {
    return this.http.get<Transaction_History[]>(Server.API_ENDPOINT + 'transaction_versions?tranid=' + tranid );
  }


  generateReport(report:Report) : Observable<Transaction[]>{
    return this.http.post<Transaction[]>(Server.API_ENDPOINT +'protibedon', JSON.stringify(report), this.httpOptions);
  }
  getIncomeList() : Observable<Transaction[]> {
    return this.http.get<Transaction[]>(Server.API_ENDPOINT + 'income_transactions');
  }

  getExpenseList() : Observable<Transaction[]> {
    return this.http.get<Transaction[]>(Server.API_ENDPOINT + 'expense_transactions');
  }

  addIncome(income:Transaction) : Observable<Transaction>{
    return this.http.post<Transaction>(Server.API_ENDPOINT +'income_transactions', JSON.stringify(income), this.httpOptions);
  }

  addExpense(expense:Transaction) : Observable<Transaction>{
    return this.http.post<Transaction>(Server.API_ENDPOINT +'expense_transactions', JSON.stringify(expense), this.httpOptions);
  }

  updateIncome(income:Transaction) {
    return this.http.put(Server.API_ENDPOINT +'income_transactions', JSON.stringify(income),this.httpOptions);
  }

  updateExpense(expense:Transaction) {
    return this.http.put(Server.API_ENDPOINT +'expense_transactions', JSON.stringify(expense),this.httpOptions);
  }

  deleteIncome(income:Transaction) {
    return this.http.delete(Server.API_ENDPOINT +'income_transactions/'+income.tranid, this.httpOptions);
  }

  deleteExpense(expense:Transaction) {
    return this.http.delete(Server.API_ENDPOINT +'expense_transactions/'+expense.tranid, this.httpOptions);
  }
}
