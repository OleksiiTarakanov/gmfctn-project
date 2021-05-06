import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OtherUserModalComponent } from 'src/app/shared/dialogs/other-user-modal/other-user-modal.component';

import { UserListService } from 'src/app/shared/services/user-list.service';
import { User1, User1WithInitials } from 'src/app/modules/sign-in/sign-in.service';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent implements OnInit {

  constructor(
    public userDialog: MatDialog,
    private userListService: UserListService
  ) { }


  users!: User1WithInitials[];

  ngOnInit(): void {
    this.getUsers();
  }

  onClick(user: User1): void {
    this.userDialog.open(OtherUserModalComponent, { data: user });
  }

  getUsers(): void {
    this.userListService.getAllUsers().subscribe(users => {
      this.users = this.userListService.userList
      this.users.forEach(user => {
        user.initials = `${user.firstName.split('')[0]}${user.lastName.split('')[0]}`;
      });
    })
  }
}
