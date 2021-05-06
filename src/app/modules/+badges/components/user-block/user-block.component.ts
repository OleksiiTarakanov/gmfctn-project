import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';
import { EditProfileModalComponent } from 'src/app/shared/dialogs/edit-profile-modal/edit-profile-modal.component';

import { UserService } from 'src/app/shared/services/user.service';
import { User1 } from 'src/app/modules/sign-in/sign-in.service';


@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss']
})
export class UserBlockComponent implements OnInit {

  urlBackGroungPhoto: string = '';

  constructor(
    private readonly userService: UserService,
    public dialog: MatDialog
  ) { }

  user!: User1;
  nameInitial: string = '';
  lastNameInitial: string = '';

  ngOnInit(): void {
    this.getUser();
    this.getUserInitials();
  }

  openDialog(): void {
    this.dialog.open(EditProfileModalComponent);
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
      console.log(Object.values(user))
      this.user = user;

      this.nameInitial = this.user.firstName.split('')[0];
      this.lastNameInitial = this.user.lastName.split('')[0];
      console.log(this.nameInitial, this.lastNameInitial);
    });
  }

}
