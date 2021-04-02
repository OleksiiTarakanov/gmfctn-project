import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { BadgesComponent } from '../components/badges/badges.component';


const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'Badges',
    component: BadgesComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

