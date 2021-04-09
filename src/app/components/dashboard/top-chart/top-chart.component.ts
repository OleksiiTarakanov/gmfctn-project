import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserListService } from 'src/app/shared/services/user-list.service';
import { OtherUserModalComponent } from '../../dialogs/other-user-modal/other-user-modal.component';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})




export class TopChartComponent implements OnInit {

  size = 0;

  constructor(
    private readonly userListServise: UserListService,
    public dialog: MatDialog
  ) { }

  users: User[] = this.userListServise.users.slice(0, 5)


  ngOnInit(): void {
    this.graphic();
  }

  graphic() {
    this.users.forEach(e => {
      e.size = e.xp * 3 + 'px';
    });
  }

  onClick(user: User) {
    this.dialog.open(OtherUserModalComponent, {data: user});
  }
}
