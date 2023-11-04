import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**
   *
   */
  constructor(private loginServ : LoginService, private route : Router) {
  }

  onSubmit(signInForm: NgForm){
    console.log(signInForm.value);
    if(signInForm.valid){
      this.loginServ.validateUser(signInForm.value).subscribe({
        next : (res) => {
          //console.log(res);
          if(res == true){
            this.route.navigate(['/User']);
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Sus crendenciales son invalidas!',
            })
          }

        }
      })
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Favor rellenar todos los campos',
      })
    }
  }

}
