import { Injectable } from '@angular/core';

import { Task } from './task';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  // mockdata: Data = new Data ();
  // tempTasks: Task[] = [];

  api = 'http://localhost:8080/users/';
  constructor(private http: HttpClient) { }

  // get user info for Dashboard
  getUser(id: number): Observable <any> {
    // call api return
    return this.http.get(this.api + id);
  }

  createATask(userid: number, task: Task): Observable <any>{
    return this.http.post(this.api + userid + '/task', task);
  }
}