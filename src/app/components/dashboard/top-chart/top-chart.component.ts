import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})




export class TopChartComponent implements OnInit {

  size = 0;

  users: User[] = [
    {
      name: 'Taras',
      lastName: 'Yarchak',
      photo: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      xp: 125,
      color: 'darkviolet',
      size:''
    },
    {
      name: 'Ostap',
      lastName: 'Royik',
      photo: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      xp: 115,
      color: 'orange',
      size:''
    },
    {
      name: 'Tania',
      lastName: 'Gogina',
      photo: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      xp: 70,
      color: 'darkblue',
      size:''
    },
    {
      name: 'Taras',
      lastName: 'Sava',
      photo: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      xp: 15,
      color: 'darkcyan',
      size:''
    },
    {
      name: 'Maksym',
      lastName: 'Nikolaichuk',
      photo: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      xp: 0,
      color: 'red',
      size:''
    }
  ]


  constructor() { }

  ngOnInit(): void {
    this.graphic()
  };

  graphic(){
    this.users.forEach(e => {
      e.size = e.xp*3 + 'px';
    });    
  }
}
