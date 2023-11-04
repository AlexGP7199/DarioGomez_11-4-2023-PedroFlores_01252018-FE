import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role } from '../../interfaces/role.interface';


@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.css']
})
export class RoleTableComponent {

  @Input() roleList !: Role[];

  @Output() removeRoleEvent = new EventEmitter<number>();
  @Output() editRoleEvent = new EventEmitter<Role>();
  @Output() addRoleEvent = new EventEmitter<true>();
  displayedColumns: string[] = ['id', 'nombre', 'actions'];
  //private data : RoleList[] = [];
  //dataSource = this.roleList;

  editRole(role : Role){
    this.editRoleEvent.emit(role);
  }

  removeRole(id: number){
    this.removeRoleEvent.emit(id);
  }

  addRole(){
    this.addRoleEvent.emit(true)
  }
}
