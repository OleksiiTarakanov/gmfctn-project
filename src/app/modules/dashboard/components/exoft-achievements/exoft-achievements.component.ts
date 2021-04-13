import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { MatDialog } from '@angular/material/dialog';

import { OtherUserModalComponent } from 'src/app/shared/dialogs/other-user-modal/other-user-modal.component';

import { UserListService } from 'src/app/shared/services/user-list.service';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent {

  constructor(
    public userDialog: MatDialog,
    private userService: UserListService
  ) { }

  users: User[] = this.userService.users

  onClick(user: User) {
    this.userDialog.open(OtherUserModalComponent, {data: user})
  }
}
