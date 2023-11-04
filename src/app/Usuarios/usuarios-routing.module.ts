import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page.component';

const routes: Routes = [
  {path: '', redirectTo : 'UserList', pathMatch:"full"},
  {path: 'UserList', component:UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
