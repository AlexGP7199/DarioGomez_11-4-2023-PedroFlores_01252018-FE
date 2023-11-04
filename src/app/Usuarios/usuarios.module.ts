import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UserPageComponent } from './pages/user-page.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../shared/header/header.module';
import { SideNavModule } from '../shared/side-nav/side-nav.module';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserPageComponent,
    UserTableComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    HeaderModule,
    SideNavModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UsuariosModule { }
