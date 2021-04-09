import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';

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
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(${this.user.photo})`;
  }
}
