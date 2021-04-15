import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  user: User = this.userService.user;

  constructor(
    private readonly userService: UserService,
  ) { }
}
