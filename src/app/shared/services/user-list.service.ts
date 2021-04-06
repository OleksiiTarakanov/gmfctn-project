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
      size:''
    },
    {
      name: 'Ostap',
      lastName: 'Royik',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 115,
      color: 'orange',
      size:''
    },
    {
      name: 'Tania',
      lastName: 'Gogina',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 70,
      color: 'darkblue',
      size:''
    },
    {
      name: 'Taras',
      lastName: 'Sava',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 15,
      color: 'darkcyan',
      size:''
    },
    {
      name: 'Taras',
      lastName: 'Yarchak',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 125,
      color: 'darkviolet',
      size:''
    },
    {
      name: 'Ostap',
      lastName: 'Royik',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 115,
      color: 'orange',
      size:''
    },
    {
      name: 'Tania',
      lastName: 'Gogina',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 70,
      color: 'darkblue',
      size:''
    },
    {
      name: 'Taras',
      lastName: 'Sava',
      photo: 'url(https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      xp: 15,
      color: 'darkcyan',
      size:''
    },
  ]

  constructor() { }
}
