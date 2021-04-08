import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-leave-comment-modal',
  templateUrl: './leave-comment-modal.component.html',
  styleUrls: ['./leave-comment-modal.component.scss']
})
export class LeaveCommentModalComponent implements OnInit {

  commentValue: string = '';

  leaveCommentForm: FormGroup = new FormGroup({});

  constructor(
    private readonly formBuilder: FormBuilder,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  user = this.userService

  ngOnInit(): void {
    this.leaveCommentForm = this.formBuilder.group({
      commentValue: this.formBuilder.control(this.commentValue, Validators.required),
    });
  }

  onSubmit() {
    this.commentValue = this.leaveCommentForm.value;
    this.userService.newData$.next(this.commentValue);
    this.dialog.closeAll();
  }

  onClose() {
    this.dialog.closeAll();
  }

}
