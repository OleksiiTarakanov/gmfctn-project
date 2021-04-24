import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AchievementList, AchievementList1 } from 'src/app/shared/models/AchievementList';
import { RequestAchievementModalComponent } from 'src/app/shared/dialogs/request-achievement-modal/request-achievement-modal.component';

import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';


@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent implements OnInit {
  
  achievementsList!: AchievementList1[];
  shortAchievementsList!: AchievementList1[];
  
  constructor(
    private achievementListService: AhievementListService,
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.achievementListService.getAchievements().subscribe(achievements => {
      this.achievementsList = achievements.data;
      this.shortAchievementsList = this.achievementsList.slice(0,5)
    });
  }

  openDialog() {
    this.dialog.open(RequestAchievementModalComponent);
  }

}
