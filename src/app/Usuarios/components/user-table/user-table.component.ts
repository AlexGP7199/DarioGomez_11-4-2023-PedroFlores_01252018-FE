import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  @Input() userList !: Usuario[];

  @Output() removeUserEvent = new EventEmitter<number>();
  @Output() editUserEvent = new EventEmitter<Usuario>();
  @Output() addUserEvent = new EventEmitter<true>();

  displayedColumns: string[] = ['id', 'roleId', 'nombre' ,'apellido','usuarioNombre','contraseña','cedula','fechaNacimiento','actions'];
  //private data : RoleList[] = [];
  //dataSource = this.roleList;

  editUser(user : Usuario){
    this.editUserEvent.emit(user);
  }

  removeUser(id: number){
    this.removeUserEvent.emit(id);
  }

  addUser(){
    this.addUserEvent.emit(true)
  }
}
