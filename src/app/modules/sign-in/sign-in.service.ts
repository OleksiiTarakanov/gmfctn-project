import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User1 {
  token: string;
  refreshToken: string;
  tokenExpiration: string;
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  xp: number;
  badgesCount: number;
  roles: string;
  avatarId: string;
}

@Injectable({
  providedIn: 'root'
})

export class SignInService {
  user$: BehaviorSubject<User1> = new BehaviorSubject(null as unknown as User1);

  private swaggerUrl = 'https://oleksiy-tarakanov.herokuapp.com/api/authenticate';

  constructor(private httpClient: HttpClient) { }

  onAuthentificate(userName: string, password: string): Observable<User1> {
    const credentials = {
      userName,
      password
    };

    return this.httpClient.post<User1>(`${this.swaggerUrl}`, credentials).pipe(tap(user => {
      this.user$.next(user);
    }));
  }
}


