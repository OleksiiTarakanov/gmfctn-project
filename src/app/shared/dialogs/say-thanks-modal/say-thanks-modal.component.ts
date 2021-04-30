import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User1 } from 'src/app/modules/sign-in/sign-in.service';
import { AchievementList } from 'src/app/shared/models/AchievementList';
import { User } from 'src/app/shared/models/user';

import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';
import { UserService } from 'src/app/shared/services/user.service';
import { LeaveCommentModalComponent } from '../leave-comment-modal/leave-comment-modal.component';

@Component({
  selector: 'app-say-thanks-modal',
  templateUrl: './say-thanks-modal.component.html',
  styleUrls: ['./say-thanks-modal.component.scss']
})
export class SayThanksModalComponent implements OnInit {
  
  AchievementList: AchievementList[] = [];
  urlBackGroungPhoto: string = '';
  user!: User1;
  recievedAchievements: any = [];

  constructor(
    private readonly AchievementListService: AhievementListService,
    private readonly userServise: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(https://pbs.twimg.com/profile_images/580414967721168897/2eTwLP2d.jpg)`;
    this.getCurrentUserAchievements();
    this.getUser();
  }

  onSubmit(): void {
    this.dialog.open(LeaveCommentModalComponent);
  }

  onClose() {
    this.dialog.closeAll();
  }

  getCurrentUserAchievements(): void {
    this.AchievementListService.getCurrentUserAchievements().subscribe(achs => {
      this.recievedAchievements = achs.data;
      console.log('RA',this.recievedAchievements);
    });
  }

  getUser(): void {
    this.userServise.getLoginedUser().subscribe(user => {
      this.user = user;
    });
  }

}
