import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    NavComponent,
    SidebarContentComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    SidebarContentComponent,
    UserComponent,
    HeaderComponent
  ]
})

export class HeaderModule { }
