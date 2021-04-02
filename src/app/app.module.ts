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
import { TopChartComponent } from './components/dashboard/top-chart/top-chart.component';
import { BadgesSmallComponent } from './components/dashboard/badges-small/badges-small.component';
import { ChallengesComponent } from './components/dashboard/challenges/challenges.component';
import { ExoftAchievementsComponent } from './components/dashboard/exoft-achievements/exoft-achievements.component';

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
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    BadgesComponent,
    PersonalAchivementsComponent,
    ThankYouComponent,
    TopChartComponent,
    BadgesSmallComponent,
    ChallengesComponent,
    ExoftAchievementsComponent,
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
