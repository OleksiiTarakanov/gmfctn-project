import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  urlBackGroungPhoto:string = '';

  user: User = {
    name: 'Martyn',
    lastName: 'Dovgophay',
    photo: 'https://pbs.twimg.com/profile_images/580414967721168897/2eTwLP2d.jpg',
    xp: 50,
    color: 'yellow',
    size: ''
  };

  constructor() { }


  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(${this.user.photo})`
  }
}
