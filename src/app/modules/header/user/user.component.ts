import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';
import { ChangePasswordModalComponent } from 'src/app/shared/dialogs/change-password-modal/change-password-modal.component';
import { EditProfileModalComponent } from 'src/app/shared/dialogs/edit-profile-modal/edit-profile-modal.component';

import { UserService } from 'src/app/shared/services/user.service';
import { UserListService } from 'src/app/shared/services/user-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  urlBackGroungPhoto: string = '';
  user: User = this.userService.user;


  constructor(
    private readonly userService: UserService,
    private readonly userListServise: UserListService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(${this.user.photo})`;
  }

  onEditProfile(): void {
    this.dialog.open(EditProfileModalComponent);
  }

  onChangePassword(): void {
    this.dialog.open(ChangePasswordModalComponent);
  }

  onClick(){
    console.log(this.userListServise.userList$.value);
    this.userListServise.getAllUsers().subscribe(user => {
      console.log(user);
    });
  }
}


