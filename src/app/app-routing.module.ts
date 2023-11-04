import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:"full"},
  { path:"login", loadChildren:() => import('./login/login.module').then((m) => m.LoginModule)},
  { path:"Role", loadChildren:() => import('./Role/role.module').then((m) => m.RoleModule)},
  { path:"User", loadChildren:() => import('./Usuarios/usuarios.module').then((m) => m.UsuariosModule)},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
