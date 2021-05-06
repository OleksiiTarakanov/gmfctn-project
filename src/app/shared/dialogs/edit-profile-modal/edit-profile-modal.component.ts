import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User1 } from 'src/app/modules/sign-in/sign-in.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss']
})
export class EditProfileModalComponent implements OnInit {

  user!: User1;
  urlBackGroungPhoto: string = '';
  editProfileForm: FormGroup = new FormGroup({});

  constructor(
    private readonly userServise: UserService,
    private readonly formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  getUser(): void {
    this.userServise.getLoginedUser().subscribe(user => {
      this.user = user;
      console.log('thisuser', this.user?.firstName);
    })
  }

  ngOnInit(): void {
    this.getUser();
    this.urlBackGroungPhoto = `url(https://pbs.twimg.com/profile_images/580414967721168897/2eTwLP2d.jpg)`;
    this.getForm();
  }

  getForm(): void {
    this.editProfileForm = this.formBuilder.group({
      firstName: this.formBuilder.control(this.user?.firstName, Validators.required),
      lastName: this.formBuilder.control(this.user?.lastName, Validators.required),
      email: this.formBuilder.control(this.user?.email, Validators.required),
      status: this.formBuilder.control('')
    });
    console.log('fv', this.editProfileForm.value);
  }

  onSubmit(): void {
    this.dialog.closeAll();
  }

  onClose(): void {
    this.dialog.closeAll();
  }

}
