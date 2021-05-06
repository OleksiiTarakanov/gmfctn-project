import { Component, OnInit } from '@angular/core';

import { AchievementList } from 'src/app/shared/models/AchievementList';

import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

import { MatDialog } from '@angular/material/dialog';

import { RequestAchievementModalComponent } from 'src/app/shared/dialogs/request-achievement-modal/request-achievement-modal.component';

@Component({
  selector: 'app-personal-achivements',
  templateUrl: './personal-achivements.component.html',
  styleUrls: ['./personal-achivements.component.scss']
})
export class PersonalAchivementsComponent implements OnInit {

  list: AchievementList[] = [];

  constructor(
    private readonly AchievementListService: AhievementListService,
    public dialog: MatDialog
    ) { }

  openDialog(): void {
    this.dialog.open(RequestAchievementModalComponent);
  }


  ngOnInit(): void {
    this.list = this.AchievementListService.achievements.slice(0, 4);
  }
  

}
