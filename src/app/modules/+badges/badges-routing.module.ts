import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BadgesComponent } from './badges.component';

const routes: Routes = [{ path: '', component: BadgesComponent }]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class BadgesRoutingModule { }
