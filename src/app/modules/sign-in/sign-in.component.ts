import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignInService } from './sign-in.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup = new FormGroup({});
  login: string = '';
  password: string = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly signInService: SignInService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      login: this.formBuilder.control(this.login, Validators.required),
      password: this.formBuilder.control(this.password, Validators.required)
    });
  }

  onSignIn(): void {
    if (this.signInForm.valid) {
      this.signInService.onAuthentificate(this.signInForm.value.login, this.signInForm.value.password).pipe(take(1)).subscribe(result => {
        this.router.navigate(['/l/dashboard']);
      });
    }
  }
}
