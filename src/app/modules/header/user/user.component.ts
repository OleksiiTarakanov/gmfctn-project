import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordModalComponent } from 'src/app/shared/dialogs/change-password-modal/change-password-modal.component';
import { EditProfileModalComponent } from 'src/app/shared/dialogs/edit-profile-modal/edit-profile-modal.component';

import { UserService } from 'src/app/shared/services/user.service';
import { User1 } from '../../sign-in/sign-in.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  urlBackGroungPhoto: string = '';
  user!: User1;
  nameInitial: string = '';
  lastNameInitial: string = '';

  constructor(
    private readonly userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // this.urlBackGroungPhoto = `url(${this.user.photo})`;
    this.getUser();
    this.getUserInitials();
  }

  onEditProfile(): void {
    this.dialog.open(EditProfileModalComponent);
  }

  onChangePassword(): void {
    this.dialog.open(ChangePasswordModalComponent);
  }

  getUser(): void {
    this.userService.getLoginedUser().subscribe(user => {
      console.log(Object.values(user))
      this.user = user;
      return user;
    });
  }

  getUserInitials(): void {
    this.userService.getLoginedUser().subscribe(user => {
      this.user = user;
      this.nameInitial = this.user.firstName.split('')[0];
      this.lastNameInitial = this.user.lastName.split('')[0];
    });
  }
}


