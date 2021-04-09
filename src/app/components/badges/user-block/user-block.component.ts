import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss']
})
export class UserBlockComponent implements OnInit {

  urlBackGroungPhoto:string = '';
 
  constructor(
    private readonly userService: UserService
  ) { }

  user: User = this.userService.user

  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(${this.user.photo})`;
  }

}
