import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserRegister } from 'src/models/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  myAppUrl: string
  myApiUrl: string

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpointBackend;
    this.myApiUrl = "user";
  }

  registerUser(user: UserRegister){
    return this.http.post(this.myAppUrl + this.myApiUrl, user)
  }
  searchUserByUsername(username: String){
    return this.http.get(this.myAppUrl + this.myApiUrl + `/searchByUsername/${username}`)
  }
}
