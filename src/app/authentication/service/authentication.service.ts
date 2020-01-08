import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public baseUrl = 'http://localhost:3000/' 
  constructor(private http: HttpClient) { }
       register(payload){
         return this.http.post(`${this.baseUrl}users`,payload);
       }
       login(payload){
         return this.http.get(`${this.baseUrl}users?email=${payload.email}&password=${payload.password}`)
       }
}
