import { Component, OnInit } from '@angular/core';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

@Component({
  selector: 'app-personal-achivements',
  templateUrl: './personal-achivements.component.html',
  styleUrls: ['./personal-achivements.component.scss']
})
export class PersonalAchivementsComponent implements OnInit {

  list:any[] | undefined

  constructor(private readonly achList: AhievementListService) { }


  ngOnInit(): void {
    this.list = this.achList.achievements ;
    console.log(this.list);  
  }

}
