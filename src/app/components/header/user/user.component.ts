import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  urlBackGroungPhoto:string = '';

  constructor(
    private readonly userService: UserService
  ) { }

  user: User = this.userService.user


  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(${this.user.photo})`
  }
}
