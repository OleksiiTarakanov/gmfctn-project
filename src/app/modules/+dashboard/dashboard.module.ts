import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';

import { BadgesSmallComponent } from './components/badges-small/badges-small.component';
import { ExoftAchievementsComponent } from './components/exoft-achievements/exoft-achievements.component';
import { PersonalAchivementsComponent } from './components/personal-achivements/personal-achivements.component';
import { TopChartComponent } from './components/top-chart/top-chart.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    PersonalAchivementsComponent,
    TopChartComponent,
    BadgesSmallComponent,
    ChallengesComponent,
    ExoftAchievementsComponent,
    DashboardComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MaterialModule,
    SharedModule
  ], 
  exports: [
    PersonalAchivementsComponent,
    TopChartComponent,
    BadgesSmallComponent,
    ChallengesComponent,
    ExoftAchievementsComponent,
  ]
})

export class DashboardModule { }
