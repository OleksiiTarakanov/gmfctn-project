import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BadgesSmallComponent } from './components/badges-small/badges-small.component';
import { ExoftAchievementsComponent } from './components/exoft-achievements/exoft-achievements.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PersonalAchivementsComponent } from './components/personal-achivements/personal-achivements.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { TopChartComponent } from './components/top-chart/top-chart.component';
import { ChallengesComponent } from './components/challenges/challenges.component';



@NgModule({
  declarations: [
    PersonalAchivementsComponent,
    ThankYouComponent,
    TopChartComponent,
    BadgesSmallComponent,
    ChallengesComponent,
    ExoftAchievementsComponent,],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports: [
    PersonalAchivementsComponent,
    ThankYouComponent,
    TopChartComponent,
    BadgesSmallComponent,
    ChallengesComponent,
    ExoftAchievementsComponent,
  ]
})
export class DashboardModule { }
