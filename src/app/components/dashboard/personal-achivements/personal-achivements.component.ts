import { Component, OnInit } from '@angular/core';
import { Achievelist } from 'src/app/models/achievelist';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

import { MatDialog } from '@angular/material/dialog';
import { RequestAchievementModalComponent } from '../../dialogs/request-achievement-modal/request-achievement-modal.component';

@Component({
  selector: 'app-personal-achivements',
  templateUrl: './personal-achivements.component.html',
  styleUrls: ['./personal-achivements.component.scss']
})
export class PersonalAchivementsComponent implements OnInit {

  list: Achievelist[] = [];

  constructor(
    private readonly achievementService: AhievementListService,
    public dialog: MatDialog
    ) { }

  openDialog() {
    this.dialog.open(RequestAchievementModalComponent)
  }


  ngOnInit(): void {
    this.list = this.achievementService.achievements.slice(0, 4);
  }
  

}
