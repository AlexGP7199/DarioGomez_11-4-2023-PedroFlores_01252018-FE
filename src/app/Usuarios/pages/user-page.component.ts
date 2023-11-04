import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioService } from '../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { RoleFromDialogComponent } from 'src/app/Role/components/role-from-dialog/role-from-dialog.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public userList : Usuario[] = [];

  sideBarOpen = true;

  constructor(private userS : UsuarioService, private matDialog : MatDialog ) {}
  ngOnInit(): void {
      this.getAllUser();
  }

  getAllUser(){
    this.userS.getAllUsers().subscribe({
      next : (res) => {
          console.log(res);
          this.userList = res;
      }
    })
  }

  editUser(user : Usuario){
    this.matDialog.open(UserFormComponent, {
      width: 'auto',
      height: 'auto',
      data:user,
      disableClose : true
    }).afterClosed().subscribe(value => {
      if(value == 'update'){
        this.getAllUser();
      }
    })
  }

  removeUser(id : number){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Seguro que quieres Eliminar este de Rol?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        //const date = new Date()
        //let fechaFormted = new Date(format(date, 'dd-MMM-yyyy'));
        this.userS.deleteUser(id).subscribe({
          next : (res) => {
            Swal.fire(
              'Removido !',
              'Usuario Eliminado.',
              'success'
            )
            this.getAllUser();
          }, error(err){
            Swal.fire(
              'Error !',
              'algo salio mal',
              'error'
            )
          }
        })

      }
    })
  }

  addUser(event : boolean){
    if(event){
      this.matDialog.open(UserFormComponent, {
        width: 'auto',
        height: 'auto',
        disableClose : true
      }).afterClosed().subscribe(value => {
        if(value == 'save'){
          this.getAllUser();
        }
      })
    }
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
