import { Component, OnInit } from '@angular/core';
import { Achievelist } from 'src/app/models/achievelist';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent implements OnInit {

  constructor(private service: AhievementListService) { }

  list: Achievelist[] | undefined;
  

  ngOnInit(): void {
    this.list = this.service.achievements.slice(0,4);
  }

}
