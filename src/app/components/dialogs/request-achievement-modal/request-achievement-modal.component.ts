import { Component, OnInit } from '@angular/core';
import { Achievelist } from 'src/app/models/achievelist';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

@Component({
  selector: 'app-request-achievement-modal',
  templateUrl: './request-achievement-modal.component.html',
  styleUrls: ['./request-achievement-modal.component.scss']
})
export class RequestAchievementModalComponent implements OnInit {

  achivementList:Achievelist[] = [];

  constructor(
    private readonly achievementService: AhievementListService
  ) { }

  ngOnInit(): void {
    this.achivementList = this.achievementService.achievements;
  }

}
