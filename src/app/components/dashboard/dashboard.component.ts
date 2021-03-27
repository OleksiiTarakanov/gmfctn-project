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
 
  @Input()
  cols:number = 6;

  @Input()
  colspan:number = 6;

  tiles: Tile[] = [
    {text: 'One', cols: 6, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 6, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Five', cols: 4, rows: 2, color: '#DDBDF1'},
    {text: 'Six', cols: 6, rows: 2, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cols)
  }

}
