import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Achievelist } from 'src/app/models/achievelist';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';
import { RequestAchievementModalComponent } from '../../dialogs/request-achievement-modal/request-achievement-modal.component';

@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent implements OnInit {

  constructor(
    private achievementService: AhievementListService,
    public dialog: MatDialog) { }

  list: Achievelist[] | undefined;
  

  ngOnInit(): void {
    this.list = this.achievementService.achievements.slice(0,4);
  }

  openDialog() {
    this.dialog.open(RequestAchievementModalComponent)
  }

}
