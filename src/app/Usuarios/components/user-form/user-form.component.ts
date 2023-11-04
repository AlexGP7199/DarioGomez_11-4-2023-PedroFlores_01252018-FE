import { Component, Inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../interfaces/usuario.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  actionBtn : string = "Guardar"
  UserForm !: FormGroup
  isCreating : boolean = true;
  constructor(private userServ : UsuarioService, private fb : FormBuilder, private dialogRef : MatDialogRef<UserFormComponent>,@Inject(MAT_DIALOG_DATA) public editData : Usuario) {}


  ngOnInit(): void {
    this.UserForm = this.fb.group({
      id : ['',Validators.required],
      roleId : ['', Validators.required],
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      usuarioNombre : ['', Validators.required],
      pasword : ['', Validators.required],
      cedula : ['', Validators.required],
      fechaNacimiento : ['', Validators.required],
    })

    if(this.editData){
      console.log(this.editData)
      this.actionBtn = "Actualizar"
      this.isCreating = false;
      this.UserForm.controls['id'].setValue(this.editData.id);
      this.UserForm.controls['id'].disable();
      this.UserForm.controls['roleId'].setValue(this.editData.roleId);
      this.UserForm.controls['nombre'].setValue(this.editData.nombre);
      this.UserForm.controls['apellido'].setValue(this.editData.apellido);
      this.UserForm.controls['usuarioNombre'].setValue(this.editData.usuarioNombre);
      this.UserForm.controls['pasword'].setValue(this.editData.pasword);
      this.UserForm.controls['cedula'].setValue(this.editData.cedula);
      this.UserForm.controls['fechaNacimiento'].setValue(this.editData.fechaNacimiento);
    }else{
      this.UserForm.controls['id'].disable();

    }
  }

  createUser(){
    if(this.UserForm.valid){
      console.log(this.UserForm.value);
      this.userServ.createNewUser(this.UserForm.value).subscribe({
        next : (res) => {
          Swal.fire(
            'Usuario Creado!',
            'Su nuevo Usuario fue Creado!',
            'success'
          )
          this.UserForm.reset();
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

  updateUser(){
    if(this.UserForm.valid){
      this.UserForm.controls['id'].enable();
      this.userServ.updateUser(this.UserForm.value).subscribe({
        next : (res) => {
          Swal.fire(
            'Usuario Modificado!',
            'Su usuario fue Mofificado!',
            'success'
          )
          this.UserForm.reset();
          this.dialogRef.close('update');
        }, error(err){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Asegurese que el usuario o el id no esten creados',
          })
        }
      })
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

      //console.log("voy a guardar")
        this.createUser();
    }else{
      this.updateUser();
    }
  }

}
