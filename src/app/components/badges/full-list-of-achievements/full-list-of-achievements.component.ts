import { Component, OnInit } from '@angular/core';
import { Achievelist } from 'src/app/models/achievelist';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

@Component({
  selector: 'app-full-list-of-achievements',
  templateUrl: './full-list-of-achievements.component.html',
  styleUrls: ['./full-list-of-achievements.component.scss']
})
export class FullListOfAchievementsComponent implements OnInit {

  list: Achievelist[] = [];

  constructor(private readonly achievementService: AhievementListService) { }

  ngOnInit(): void {
    this.list = this.achievementService.achievements;
  }

}
