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
      userID: 1
    },
    {
      name: 'Ostap',
      lastName: 'Royik',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 115,
      color: 'orange',
      size:'',
      userID: 2
    },
    {
      name: 'Tania',
      lastName: 'Gogina',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 70,
      color: 'darkblue',
      size:'',
      userID: 3
    },
    {
      name: 'Taras',
      lastName: 'Sava',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 15,
      color: 'darkcyan',
      size:'',
      userID: 4
    },
    {
      name: 'Taras',
      lastName: 'Yarchak',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 125,
      color: 'darkviolet',
      size:'',
      userID: 5
    },
    {
      name: 'Ostap',
      lastName: 'Royik',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 115,
      color: 'orange',
      size:'',
      userID: 6
    },
    {
      name: 'Tania',
      lastName: 'Gogina',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 70,
      color: 'darkblue',
      size:'',
      userID: 7
    },
    {
      name: 'Taras',
      lastName: 'Sava',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 15,
      color: 'darkcyan',
      size:'',
      userID: 8
    },
  ]

  constructor() { }
}
