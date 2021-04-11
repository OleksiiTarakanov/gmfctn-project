import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  users: User[] = [
    {
      name: 'Taras',
      lastName: 'Yarchak',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 125,
      color: 'darkviolet',
      size:'',
      userID: 1,
      email: 'email'
    },
    {
      name: 'Ostap',
      lastName: 'Royik',
      photo: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9dXKStTVsGgi1Pl2GsYKyd0qVgdztq9PLg&usqp=CAU)',
      xp: 115,
      color: 'orange',
      size:'',
      userID: 2,
      email: 'email'
    },
    {
      name: 'Tania',
      lastName: 'Gogina',
      photo: 'url(https://play-lh.googleusercontent.com/f0jCBnEIgln1wJ6V-LXFWMwJ-ZVklD02ueJWCUx8hlhspylOUpLLJh9rx_sMWDgML-0K)',
      xp: 70,
      color: 'darkblue',
      size:'',
      userID: 3,
      email: 'email'
    },
    {
      name: 'Taras',
      lastName: 'Sava',
      photo: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtUcG1O4ZjUUKACpD0sbNAJHH4Kvxb23ekQ&usqp=CAU)',
      xp: 15,
      color: 'darkcyan',
      size:'',
      userID: 4,
      email: 'email'
    },
    {
      name: 'Taras',
      lastName: 'Yarchak',
      photo: 'url(https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg)',
      xp: 125,
      color: 'darkviolet',
      size:'',
      userID: 5,
      email: 'email'
    },
    {
      name: 'Ostap',
      lastName: 'Royik',
      photo: 'url(https://avatarfiles.alphacoders.com/475/47588.jpg)',
      xp: 115,
      color: 'orange',
      size:'',
      userID: 6,
      email: 'email'
    },
    {
      name: 'Tania',
      lastName: 'Gogina',
      photo: 'url(https://avatarfiles.alphacoders.com/468/46826.jpg)',
      xp: 70,
      color: 'darkblue',
      size:'',
      userID: 7,
      email: 'email'
    },
    {
      name: 'Taras',
      lastName: 'Sava',
      photo: 'url(https://i.pinimg.com/originals/e0/51/30/e051304e769741337e726ea54abfe129.png)',
      xp: 15,
      color: 'darkcyan',
      size:'',
      userID: 8,
      email: 'email'
    },
  ]

  constructor() { }
}
