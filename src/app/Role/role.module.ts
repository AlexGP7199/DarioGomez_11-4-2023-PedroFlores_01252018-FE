import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RolePageComponent } from './pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../shared/header/header.module';
import { SideNavModule } from '../shared/side-nav/side-nav.module';
import { RoleTableComponent } from './components/role-table/role-table.component';
import { RoleFromDialogComponent } from './components/role-from-dialog/role-from-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RolePageComponent,
    RoleTableComponent,
    RoleFromDialogComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    SharedModule,
    HeaderModule,
    SideNavModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoleModule { }
