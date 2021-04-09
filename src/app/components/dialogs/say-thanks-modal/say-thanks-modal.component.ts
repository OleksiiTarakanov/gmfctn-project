import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Achievelist } from 'src/app/models/achievelist';
import { User } from 'src/app/models/user';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';
import { LeaveCommentModalComponent } from './leave-comment-modal/leave-comment-modal.component';

@Component({
  selector: 'app-say-thanks-modal',
  templateUrl: './say-thanks-modal.component.html',
  styleUrls: ['./say-thanks-modal.component.scss']
})
export class SayThanksModalComponent implements OnInit {

  constructor(
    private readonly achievementService: AhievementListService,
    public dialog: MatDialog
  ) { }

  achieveList: Achievelist[] = [];

  urlBackGroungPhoto: string = '';

  user: User = {
    name: 'Martyn',
    lastName: 'Dovgophay',
    photo: 'https://pbs.twimg.com/profile_images/580414967721168897/2eTwLP2d.jpg',
    xp: 50,
    color: 'yellow',
    size: '',
    userID : 100
  };

  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(${this.user.photo})`;
    this.achieveList = this.achievementService.achievements;
  }

  onSubmit(): void {
    this.dialog.open(LeaveCommentModalComponent)
  }

  onClose() {
    this.dialog.closeAll();
  }

}
