import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private readonly AchievementListService: AhievementListService,
    public dialog: MatDialog,
    private readonly userServise: UserService
  ) { }

  AchievementList: AchievementList[] = [];

  urlBackGroungPhoto: string = '';

  user: User = this.userServise.user

  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(${this.user.photo})`;
    this.AchievementList = this.AchievementListService.achievements;
  }

  onSubmit(): void {
    this.dialog.open(LeaveCommentModalComponent)
  }

  onClose() {
    this.dialog.closeAll();
  }

}
