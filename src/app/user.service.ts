import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './interface/User';
import { Observable } from 'rxjs';
const GET_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: 'http://localhost:8081'
  constructor(private http: HttpClient) { }

  addUser(newUser: User): Observable<any> {
    return this.http.post<any>(this.url + `/user/`, newUser, GET_HEADERS);
  }

  getUser(emailId: string): Observable<any> {
    return this.http.get<any>(this.url + '/user/' + emailId);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.url + '/user/');
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(this.url + '/user/' + userId);
  }
  updateUser(user: User): Observable<any> {

    return this.http.put<any>(this.url + `/user/`, user, GET_HEADERS);
  }
}
