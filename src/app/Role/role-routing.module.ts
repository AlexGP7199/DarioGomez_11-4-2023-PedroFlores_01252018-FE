import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolePageComponent } from './pages/pages.component';

const routes: Routes = [
  {path: '', redirectTo : 'RoleList', pathMatch:"full"},
  {path: 'RoleList', component:RolePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
