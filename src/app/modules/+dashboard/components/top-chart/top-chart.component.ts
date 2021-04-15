import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';
import { OtherUserModalComponent } from 'src/app/shared/dialogs/other-user-modal/other-user-modal.component';
import { UserListService } from 'src/app/shared/services/user-list.service';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})

export class TopChartComponent implements OnInit {

  size = 0;

  constructor(
    private readonly userListServise: UserListService,
    private dialog: MatDialog
  ) { }

  users: User[] = this.userListServise.users.slice(0, 5);

  ngOnInit(): void {
    this.graphic();
  }

  graphic(): void {
    this.users.forEach(e => {
      e.size = e.xp * 3 + 'px';
    });
  }

  onClick(user: User): void {
    this.dialog.open(OtherUserModalComponent, {data: user});
  }
}
