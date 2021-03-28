import { Component, Input, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user:string = "Oleksii"
 

  // tiles: Tile[] = [
  //   {text: `One`, cols: 7, rows: 2, color: 'lightblue'},
  //   {text: 'Two', cols: 3, rows: 6, color: 'lightgreen'},
  //   {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 2, color: 'lightpink'},
  //   {text: 'Five', cols: 3, rows: 2, color: '#DDBDF1'},
  //   {text: 'Six', cols: 7, rows: 2, color: '#DDBDF1'},
  // ];

  constructor() { }

  ngOnInit(): void {
  
  }

}
