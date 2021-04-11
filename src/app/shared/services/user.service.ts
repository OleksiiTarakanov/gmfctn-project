import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = {
    name: 'Martyn',
    lastName: 'Dovgophay',
    photo: 'https://pbs.twimg.com/profile_images/580414967721168897/2eTwLP2d.jpg',
    xp: 50,
    color: 'yellow',
    size: '',
    userID: 100,
    email: 'siricuster@gmail.com'
  };

  public newData$ = new Subject<any>();

  constructor() { }
}
