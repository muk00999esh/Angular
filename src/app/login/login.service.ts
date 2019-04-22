import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getUser(uname,pass){
    return this.http.get('http://localhost:8312/DQMEmployer/api/login/'+uname+':'+pass);    
  }
}
