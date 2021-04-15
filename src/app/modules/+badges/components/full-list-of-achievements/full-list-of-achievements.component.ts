import { Component, OnInit } from '@angular/core';
import { AchievementList } from 'src/app/shared/models/AchievementList';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

@Component({
  selector: 'app-full-list-of-achievements',
  templateUrl: './full-list-of-achievements.component.html',
  styleUrls: ['./full-list-of-achievements.component.scss']
})
export class FullListOfAchievementsComponent implements OnInit {

  list: AchievementList[] = [];

  constructor(private readonly AchievementListService: AhievementListService) { }

  ngOnInit(): void {
    this.list = this.AchievementListService.achievements;
  }

}
