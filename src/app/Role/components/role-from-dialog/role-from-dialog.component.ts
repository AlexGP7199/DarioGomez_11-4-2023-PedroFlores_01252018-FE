import { Component, Inject, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Role } from '../../interfaces/role.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role-from-dialog',
  templateUrl: './role-from-dialog.component.html',
  styleUrls: ['./role-from-dialog.component.css']
})
export class RoleFromDialogComponent implements OnInit {


  constructor(private roleSer : RoleService, private fb : FormBuilder, private dialogRef : MatDialogRef<RoleFromDialogComponent>,@Inject(MAT_DIALOG_DATA) public editData : Role) {
  }

  actionBtn : string = "Guardar"
  RoleForm !: FormGroup
  isCreating : boolean = true;

  ngOnInit(): void {
    this.RoleForm = this.fb.group({
      id : ['',Validators.required],
      nombre : ['', Validators.required]
    })

    if(this.editData){
      this.actionBtn = "Actualizar";
      this.isCreating = false;
      this.RoleForm.controls['id'].setValue(this.editData.id);
      this.RoleForm.controls['id'].disable();
      this.RoleForm.controls['nombre'].setValue(this.editData.nombre);
    }else{
      this.RoleForm.controls['id'].disable();

    }
  }

  createRole(){
    if(this.RoleForm.valid){
      this.roleSer.createNewRole(this.RoleForm.value).subscribe({
        next : (res) => {
          Swal.fire(
            'Role Creado!',
            'Su nuevo Role fue Creado!',
            'success'
          )
          this.RoleForm.reset();
          this.dialogRef.close('save');

        },error(err) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Asegurese que el usuario o el id no esten creados',
          })
        },
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Rellene todos los campos!',
      })
    }
  }

  updateRole(){
    if(this.RoleForm.valid){
      this.RoleForm.controls['id'].enable();
      this.roleSer.updateRole(this.RoleForm.value).subscribe({
        next : (res) => {
          Swal.fire(
            'Role Modificado!',
            'Su Role fue Mofificado!',
            'success'
          )
          this.RoleForm.reset();
          this.dialogRef.close('update');
        }, error(err){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Asegurese que el usuario o el id no esten creados',
          })
        }

      })
      this.RoleForm.controls['id'].disable();
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Rellene todos los campos!',
      })
    }
  }

  validateEntry(){
    if(this.actionBtn=="Guardar"){
      console.log("voy a guardar")
        this.createRole();
    }else{
      this.updateRole();
    }
  }

}
