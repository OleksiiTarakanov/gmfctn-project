import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Achievelist } from 'src/app/models/achievelist';
import { User } from 'src/app/models/user';
import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';
import { UserListService } from 'src/app/shared/services/user-list.service';




@Component({
  selector: 'app-other-user-modal',
  templateUrl: './other-user-modal.component.html',
  styleUrls: ['./other-user-modal.component.scss']
})
export class OtherUserModalComponent implements OnInit {



  constructor(
    private readonly achievementService: AhievementListService,
    public dialog: MatDialog,
    private readonly userList: UserListService,
    @Inject(MAT_DIALOG_DATA) public data: User) {
    this.user = data;
  }

  users: User[] = Object.values(this.userList.users)
  achieveList: Achievelist[] = [];

  user: any;

  ngOnInit(): void {
    this.achieveList = this.achievementService.achievements; 
  }

  onClose(): void {
    this.dialog.closeAll();
  }
}

