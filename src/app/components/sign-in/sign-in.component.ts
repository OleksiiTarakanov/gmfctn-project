import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup = new FormGroup({});
  login: string = '';
  password: string = '';
  isDataValid: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      login: this.formBuilder.control(this.login, Validators.required),
      password: this.formBuilder.control(this.password, Validators.required)
    });
  }

  onSignIn(): void {
    
    let inputedLogin = Object.values(this.signInForm.value)[0];
    let inputedPassword = Object.values(this.signInForm.value)[1];

    if (inputedLogin === 'admin' && inputedPassword === 'admin') {
      this.isDataValid = true;
    } else {
      alert('Data invalid');
    }
  }
}
