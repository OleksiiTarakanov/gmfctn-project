import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BadgesRoutingModule } from './badges-routing.module';

import { FullListOfAchievementsComponent } from './components/full-list-of-achievements/full-list-of-achievements.component';
import { LastAchievementsComponent } from './components/last-achievements/last-achievements.component';
import { TotalAchievementsExpComponent } from './components/total-achievements-exp/total-achievements-exp.component';
import { UserBlockComponent } from './components/user-block/user-block.component';
import { BadgesComponent } from './badges.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';




@NgModule({
  declarations: [
    LastAchievementsComponent,
    FullListOfAchievementsComponent,
    TotalAchievementsExpComponent,
    UserBlockComponent,
    BadgesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BadgesRoutingModule,
    SharedModule
  ],
  exports:[
    LastAchievementsComponent,
    FullListOfAchievementsComponent,
    TotalAchievementsExpComponent,
    UserBlockComponent,
    BadgesComponent,
  ]
})

export class BadgesModule { }
