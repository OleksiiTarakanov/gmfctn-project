import { Component, OnInit } from '@angular/core';
import { AchievementList, AchievementList1 } from 'src/app/shared/models/AchievementList';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

@Component({
  selector: 'app-full-list-of-achievements',
  templateUrl: './full-list-of-achievements.component.html',
  styleUrls: ['./full-list-of-achievements.component.scss']
})
export class FullListOfAchievementsComponent implements OnInit {

  achievementsList!: AchievementList1[];

  constructor(private readonly AchievementListService: AhievementListService) { }

  ngOnInit(): void {
    this.AchievementListService.getAchievements().subscribe(achievements => {
      this.achievementsList = achievements.data;
    });   
  }
}
