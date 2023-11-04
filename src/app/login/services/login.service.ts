import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/apiUrl';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  validateUser(user : Usuario):Observable<boolean>{
    return this.http.post<boolean>(
      apiUrl + "/Usuario/LogIn",
      user,
      this.httpOptions
    )
  }
}
