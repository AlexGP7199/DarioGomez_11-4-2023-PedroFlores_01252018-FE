import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/role.interface';

import { apiUrl } from 'src/environments/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllRoles():Observable<Role[]>{
    return this.http.get<Role[]>(
      apiUrl + '/Role/allRoles'
    )
  }

  getRoleById(id : number):Observable<Role>{
    return this.http.get<Role>(
      apiUrl + '/Role/getById?id='+id
    )
  }

  createNewRole(role:Role):Observable<boolean>{
    return this.http.post<boolean>(
      apiUrl + '/Role/CreateNewRole',
      role,
      this.httpOptions
    )
  }

  updateRole(role:Role):Observable<boolean>{
    return this.http.put<boolean>(
      apiUrl + '/Role/UpdateRole',
      role,
      this.httpOptions
    )
  }

  deleteRole(id : number): Observable<boolean>{
    return this.http.delete<boolean>(
      apiUrl + '/Role/DeleteRole?id=' + id
    )
  }

}
