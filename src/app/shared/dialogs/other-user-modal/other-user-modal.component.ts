import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';
import { UserListService } from 'src/app/shared/services/user-list.service';
import { AchievementList } from 'src/app/shared/models/AchievementList';

@Component({
  selector: 'app-other-user-modal',
  templateUrl: './other-user-modal.component.html',
  styleUrls: ['./other-user-modal.component.scss']
})

export class OtherUserModalComponent implements OnInit {

  constructor(
    private readonly AchievementListService: AhievementListService,
    public dialog: MatDialog,
    private readonly userList: UserListService,
    @Inject(MAT_DIALOG_DATA) public data: User) {
    this.user = data;
  }

  AchievementList: AchievementList[] = [];
  user: User;

  ngOnInit(): void {
    this.AchievementList = this.AchievementListService.achievements; 
  }

  onClose(): void {
    this.dialog.closeAll();
  }
}

