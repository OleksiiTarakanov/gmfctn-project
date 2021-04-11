import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss']
})
export class EditProfileModalComponent implements OnInit {

  user: User = this.userServise.user;
  urlBackGroungPhoto: string = '';
  editProfileForm: FormGroup = new FormGroup({});

  constructor(
    private readonly userServise: UserService,
    private readonly formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.urlBackGroungPhoto = `url(${this.user.photo})`;
    this.editProfileForm = this.formBuilder.group({
      firstName: this.formBuilder.control(this.user.name, Validators.required),
      lastName: this.formBuilder.control(this.user.lastName, Validators.required),
      email: this.formBuilder.control(this.user.email, Validators.required),
      status: this.formBuilder.control(''),
    });
  }

  onSubmit(): void {
    this.dialog.closeAll();
  }

  onClose(): void {
    this.dialog.closeAll();
  }

}
