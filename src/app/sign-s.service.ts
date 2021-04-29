import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


const url = 'https://new-customer-ac8fd-default-rtdb.firebaseio.com/users';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class SignSService {

users: User[] = [];

  constructor(public http: HttpClient) { }

  insertUser(user: User): void {
    
    this.http.post<User>(`${url}.json`,user, httpOptions)
    .subscribe(res => console.log(res));
  }

  getUser(): void {

    this.http.get<any>(`${url}.json`, httpOptions)
    .subscribe(res => 
      {
      Object.keys(res).forEach(key => {
        const obj = Object.assign({}, res[key]);
        obj.key = key
         this.users.push(obj)
        console.log(this.users)
      })
    });
  }


  deleteUser(users: User): Observable<Object> {
   console.log(users.key)
   let res = this.http.delete(`${url}/${users.key}.json`, httpOptions)
     return res

  }
}
