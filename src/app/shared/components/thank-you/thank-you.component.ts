import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  comment: string[] = ['Thank you guys'];
  

  constructor(
    private userService: UserService
  ) { }

  user = this.userService.user

  ngOnInit(): void {
    this.userService.newData$.subscribe(newComment => {
      this.comment = Object.values(newComment);
    });    
  }
}
