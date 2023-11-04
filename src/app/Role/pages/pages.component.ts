import { Component, OnInit } from '@angular/core';
import { RoleService } from '../services/role.service';
import { Role } from '../interfaces/role.interface';
import { MatDialog } from '@angular/material/dialog';
import { RoleFromDialogComponent } from '../components/role-from-dialog/role-from-dialog.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class RolePageComponent implements OnInit {

  public roleList : Role[] = [];

  constructor(private roleS : RoleService, private matDialog : MatDialog ) { }

  ngOnInit(): void {
    this.getAllRole();
  }

  getAllRole(){
    this.roleS.getAllRoles().subscribe({
      next : (res) => {
          console.log(res);
          this.roleList = res;
      }
    })
  }

  editRole(role : Role){
    this.matDialog.open(RoleFromDialogComponent, {
      width: 'auto',
      height: 'auto',
      data:role,
      disableClose : true
    }).afterClosed().subscribe(value => {
      if(value == 'update'){
        this.getAllRole();
      }
    })
  }

  removeRole(id : number){
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
        this.roleS.deleteRole(id).subscribe({
          next : (res) => {
            Swal.fire(
              'Removido !',
              'Rol Eliminado.',
              'success'
            )
            this.getAllRole();
          }, error(err){
            Swal.fire(
              'Error !',
              'Asegurese que dicho rol no tengo usuarios asignados',
              'error'
            )
          }
        })

      }
    })
  }

  addRole(event : boolean){
    if(event){
      this.matDialog.open(RoleFromDialogComponent, {
        width: 'auto',
        height: 'auto',
        disableClose : true
      }).afterClosed().subscribe(value => {
        if(value == 'save'){
          this.getAllRole();
        }
      })
    }

  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
