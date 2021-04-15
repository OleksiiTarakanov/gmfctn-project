import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'Dashboard',
    loadChildren: () => import('../+dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'Badges',
    loadChildren: () => import('../+badges/badges.module').then(m => m.BadgesModule)
  },
  {
    path: '',
    loadChildren: () => import('../+dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule { }

