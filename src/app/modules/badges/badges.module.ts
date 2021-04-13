import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { FullListOfAchievementsComponent } from './components/full-list-of-achievements/full-list-of-achievements.component';
import { LastAchievementsComponent } from './components/last-achievements/last-achievements.component';
import { TotalAchievementsExpComponent } from './components/total-achievements-exp/total-achievements-exp.component';
import { UserBlockComponent } from './components/user-block/user-block.component';



@NgModule({
  declarations: [
    LastAchievementsComponent,
    FullListOfAchievementsComponent,
    TotalAchievementsExpComponent,
    UserBlockComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    LastAchievementsComponent,
    FullListOfAchievementsComponent,
    TotalAchievementsExpComponent,
    UserBlockComponent,
  ]
})
export class BadgesModule { }
