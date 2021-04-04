import { Component, OnInit } from '@angular/core';
import { Achievelist } from 'src/app/models/achievelist';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

@Component({
  selector: 'app-personal-achivements',
  templateUrl: './personal-achivements.component.html',
  styleUrls: ['./personal-achivements.component.scss']
})
export class PersonalAchivementsComponent implements OnInit {

  list: Achievelist[] | undefined

  constructor(private readonly achList: AhievementListService) { }


  ngOnInit(): void {
    this.list = this.achList.achievements.slice(0,4);
  }

}
