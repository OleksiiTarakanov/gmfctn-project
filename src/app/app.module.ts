import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './components/header/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BadgesComponent } from './components/badges/badges.component';
import { PersonalAchivementsComponent } from './components/dashboard/personal-achivements/personal-achivements.component';
import { ThankYouComponent } from './components/dashboard/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'Badges',
    component: BadgesComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    PersonalAchivementsComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
