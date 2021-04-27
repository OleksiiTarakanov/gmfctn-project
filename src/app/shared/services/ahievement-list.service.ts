import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AchievementList1 } from '../models/AchievementList';

@Injectable({
  providedIn: 'root'
})
export class AhievementListService {

  achivementsList$: BehaviorSubject<any> = new BehaviorSubject(null);
  currentUserAchievements$: BehaviorSubject<any> = new BehaviorSubject(null);

  private swaggerUrl = 'https://oleksiy-tarakanov.herokuapp.com/api/achievements';
  private currentUserAchievementsUrl = 'https://oleksiy-tarakanov.herokuapp.com/api/users/current-user/achievements?CurrentPage=1&PageSize=10';

  achievements = [
    {
      achName: 'Exoft turbo power',
      achPic: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Eo1Hca2PPrfafYSUNzZ8lU36qTCpDB_I1Q&usqp=CAU)',
      achXP: '15'
    },
    {
      achName: 'Exoft skylark power',
      achPic: 'url(https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/trophy-512.png)',
      achXP: '10'
    },
    {
      achName: 'Exoft corporate power',
      achPic: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8DB7VeYMKiT4zwfehsLfNQRHvfljQYo77WMZvUHPyY2XARS3xg8V4bErXaW0kCnHBTQ&usqp=CAU)',
      achXP: '25'
    },
    {
      achName: 'Exoft owl power',
      achPic: 'url(https://previews.123rf.com/images/pixelalex/pixelalex1603/pixelalex160300023/53525563-trophy-cup-flat-icon-with-long-shadow-success-illustration.jpg)',
      achXP: '10'
    },
    {
      achName: 'Exoft party power',
      achPic: 'url(https://thiswic.nutrition.tufts.edu/wp-content/uploads/2021/02/trophy-icon-png-20.png)',
      achXP: '15'
    },
    {
      achName: 'Exoft turbo power',
      achPic: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Eo1Hca2PPrfafYSUNzZ8lU36qTCpDB_I1Q&usqp=CAU)',
      achXP: '15'
    },
    {
      achName: 'Exoft oldschool power',
      achPic: 'url(https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/trophy-512.png)',
      achXP: '10'
    },
    {
      achName: 'Exoft joke power',
      achPic: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8DB7VeYMKiT4zwfehsLfNQRHvfljQYo77WMZvUHPyY2XARS3xg8V4bErXaW0kCnHBTQ&usqp=CAU)',
      achXP: '25'
    },
    {
      achName: 'Exoft rabbit power',
      achPic: 'url(https://previews.123rf.com/images/pixelalex/pixelalex1603/pixelalex160300023/53525563-trophy-cup-flat-icon-with-long-shadow-success-illustration.jpg)',
      achXP: '10'
    },
    {
      achName: 'Exoft mega power',
      achPic: 'url(https://thiswic.nutrition.tufts.edu/wp-content/uploads/2021/02/trophy-icon-png-20.png)',
      achXP: '15'
    }

  ]

  constructor(private httpClient: HttpClient) { }

  getAchievements(): Observable<any> {
    return this.httpClient.get(this.swaggerUrl).pipe(
      take(1),
      tap(achievement => {
        this.achivementsList$.next(achievement);
      }));
  }

  getCurrentUserAchievements(): Observable<any> {
    return this.httpClient.get(this.currentUserAchievementsUrl).pipe(
      take(1),
      tap(achievements => {
        this.currentUserAchievements$.next(achievements);
      })
    )
  }


}
