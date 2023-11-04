import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports : [
    SideNavComponent
  ]
})
export class SideNavModule { }
