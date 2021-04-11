import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { ChangePasswordModalComponent } from '../../dialogs/change-password-modal/change-password-modal.component';
import { EditProfileModalComponent } from '../../dialogs/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

  opened = false;
  user: User = this.userService.user;
  urlBackGroungPhoto: string = '';

  constructor(
    private readonly userService: UserService,
    public dialog: MatDialog
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
}
