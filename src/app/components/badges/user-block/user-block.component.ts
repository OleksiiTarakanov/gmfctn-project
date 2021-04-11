import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { EditProfileModalComponent } from '../../dialogs/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss']
})
export class UserBlockComponent implements OnInit {

  urlBackGroungPhoto:string = '';
 
  constructor(
    private readonly userService: UserService,
    public dialog: MatDialog
  ) { }

  user: User = this.userService.user

  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(${this.user.photo})`;
  }

  openDialog(): void {
    this.dialog.open(EditProfileModalComponent)
  }

}
