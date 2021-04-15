import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AchievementList } from 'src/app/shared/models/AchievementList';
import { RequestAchievementModalComponent } from 'src/app/shared/dialogs/request-achievement-modal/request-achievement-modal.component';

import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';


@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent implements OnInit {

  constructor(
    private achievementListService: AhievementListService,
    public dialog: MatDialog
  ) { }

  list: AchievementList[] = [];


  ngOnInit(): void {
    this.list = this.achievementListService.achievements.slice(0, 4);
  }

  openDialog() {
    this.dialog.open(RequestAchievementModalComponent);
  }

}
