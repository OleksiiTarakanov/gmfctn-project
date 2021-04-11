import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

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

  changePasswordForm:FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: this.formBuilder.control('', Validators.required),
      newPassword: this.formBuilder.control('', Validators.required),
      confirmPassword: this.formBuilder.control('', Validators.required)
    });
  }

  private confirmPassValidator() {
    const pass = Object.values(this.changePasswordForm.value)[1];
    const confPass = Object.values(this.changePasswordForm.value)[2];
    return pass === confPass ? null : { notSame: true };
  }

  onSubmit(){
    this.changePasswordForm.setValidators(this.confirmPassValidator);
    if (this.changePasswordForm.valid){
      this.dialog.closeAll();
    } else {
      alert('Passwords not equal');
    }
  }

  onClose(){
    this.dialog.closeAll();
  }
}
