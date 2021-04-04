import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AhievementListService {
  
  achievements = [
    {
      achName:'Exoft turbo power',
      achPic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Eo1Hca2PPrfafYSUNzZ8lU36qTCpDB_I1Q&usqp=CAU',
      achXP:'15'
    },
    {
      achName:'Exoft skylark power',
      achPic:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/trophy-512.png',
      achXP:'10'
    },
    {
      achName:'Exoft corporate power',
      achPic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8DB7VeYMKiT4zwfehsLfNQRHvfljQYo77WMZvUHPyY2XARS3xg8V4bErXaW0kCnHBTQ&usqp=CAU',
      achXP:'25'
    },
    {
      achName:'Exoft owl power',
      achPic:'https://previews.123rf.com/images/pixelalex/pixelalex1603/pixelalex160300023/53525563-trophy-cup-flat-icon-with-long-shadow-success-illustration.jpg',
      achXP:'10'
    },
    {
      achName:'Exoft party power',
      achPic:'https://thiswic.nutrition.tufts.edu/wp-content/uploads/2021/02/trophy-icon-png-20.png',
      achXP:'15'
    },
    {
      achName:'Exoft turbo power',
      achPic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Eo1Hca2PPrfafYSUNzZ8lU36qTCpDB_I1Q&usqp=CAU',
      achXP:'15'
    },
    {
      achName:'Exoft oldschool power',
      achPic:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/trophy-512.png',
      achXP:'10'
    },
    {
      achName:'Exoft joke power',
      achPic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8DB7VeYMKiT4zwfehsLfNQRHvfljQYo77WMZvUHPyY2XARS3xg8V4bErXaW0kCnHBTQ&usqp=CAU',
      achXP:'25'
    },
    {
      achName:'Exoft rabbit power',
      achPic:'https://previews.123rf.com/images/pixelalex/pixelalex1603/pixelalex160300023/53525563-trophy-cup-flat-icon-with-long-shadow-success-illustration.jpg',
      achXP:'10'
    },
    {
      achName:'Exoft mega power',
      achPic:'https://thiswic.nutrition.tufts.edu/wp-content/uploads/2021/02/trophy-icon-png-20.png',
      achXP:'15'
    }

  ]
  constructor() { }
}
