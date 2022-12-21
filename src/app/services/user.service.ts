import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  searchUserByUsername(username: String){
    return this.http.get(this.myAppUrl + this.myApiUrl + `/searchByUsername/${username}`)
  }
}
