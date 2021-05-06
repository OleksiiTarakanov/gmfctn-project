import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from '../sign-in/sign-in.component';
import { HeaderComponent } from '../header/header.component';
import { SignInGuard } from '../sign-in/sign-in.guard';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'l',
    component: HeaderComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../+dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [SignInGuard]
      },
      {
        path: 'badges',
        loadChildren: () => import('../+badges/badges.module').then(m => m.BadgesModule),
        canActivate: [SignInGuard]
      }
    ]
  },
  {
    path: '',
    component: SignInComponent
  },
  {
    path: '**',
    redirectTo: '/'
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

