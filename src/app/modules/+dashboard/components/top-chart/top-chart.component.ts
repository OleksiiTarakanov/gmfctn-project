import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtherUserModalComponent } from 'src/app/shared/dialogs/other-user-modal/other-user-modal.component';
import { UserListService } from 'src/app/shared/services/user-list.service';
import { User1, User1WithInitials } from 'src/app/modules/sign-in/sign-in.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})

export class TopChartComponent implements OnInit {

  constructor(
    private readonly userListService: UserListService,
    private dialog: MatDialog
  ) { }

  users!: User1WithInitials[];

  ngOnInit(): void {
    this.getUsers();
  }

  onClick(user: User1): void {
    this.dialog.open(OtherUserModalComponent, { data: user });
  }

  getUsers(): void {
    this.userListService.getAllUsers().subscribe(users => {
      this.users = this.userListService.userList.slice(0, 5);    
      this.users.forEach(user => {
        user.initials = `${user.firstName.split('')[0]}${user.lastName.split('')[0]}`;
      });
    });
  }
}
