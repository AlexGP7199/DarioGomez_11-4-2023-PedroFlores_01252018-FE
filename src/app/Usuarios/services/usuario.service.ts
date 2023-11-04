import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { apiUrl } from 'src/environments/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllUsers():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(
      apiUrl + '/Usuario/AllUsers'
    )
  }

  getUserById(id : number):Observable<Usuario>{
    return this.http.get<Usuario>(
      apiUrl + '/Usuario/UserById?id='+id
    )
  }

  createNewUser(user:Usuario):Observable<boolean>{
    return this.http.post<boolean>(
      apiUrl + '/Usuario/CreateNewUser',
      user,
      this.httpOptions
    )
  }

  updateUser(user:Usuario):Observable<boolean>{
    return this.http.put<boolean>(
      apiUrl + '/Usuario/UpdateAnUser',
      user,
      this.httpOptions
    )
  }

  deleteUser(id : number): Observable<boolean>{
    return this.http.delete<boolean>(
      apiUrl + '/Usuario/DeleteUser?id=' + id
    )
  }
}
