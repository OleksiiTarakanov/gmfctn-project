import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User1 } from 'src/app/modules/sign-in/sign-in.service';
import { User } from 'src/app/shared/models/user';
import { take, tap } from 'rxjs/operators';

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

  loginedUserUrl = 'https://oleksiy-tarakanov.herokuapp.com/api/users/current-user-info';
  public newData$ = new Subject<any>();
  loginedUser$: BehaviorSubject<User1> = new BehaviorSubject(null as unknown as User1)

  constructor(private httpClient: HttpClient) { }

  getLoginedUser(){
    return this.httpClient.get<User1>(this.loginedUserUrl).pipe(
      take(1),
      tap(user => {
      this.loginedUser$.next(user);
    }));
  }
}
