import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { confirmPasswordValidator } from '../../validators/confirm-password-validator';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss']
})
export class ChangePasswordModalComponent implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  changePasswordForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: this.formBuilder.control('', Validators.required),
      newPassword: this.formBuilder.control('', Validators.required),
      confirmPassword: this.formBuilder.control('', Validators.required)
    }, confirmPasswordValidator);
  }

  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      this.dialog.closeAll();
    } else {
      alert('Passwords not equal');
    }
  }

  onClose(): void {
    this.dialog.closeAll();
  }
}
