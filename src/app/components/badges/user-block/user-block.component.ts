import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss']
})
export class UserBlockComponent implements OnInit {

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
  }

}
