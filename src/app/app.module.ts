import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { BadgesModule } from './modules/+badges/badges.module';
import { DashboardModule } from './modules/+dashboard/dashboard.module';
import { SignInModule } from './modules/sign-in/sign-in.module';
import { HeaderModule } from './modules/header/header.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LeaveCommentModalComponent } from './shared/dialogs/leave-comment-modal/leave-comment-modal.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { RequestAchievementModalComponent } from './shared/dialogs/request-achievement-modal/request-achievement-modal.component';
import { SayThanksModalComponent } from './shared/dialogs/say-thanks-modal/say-thanks-modal.component';
import { OtherUserModalComponent } from './shared/dialogs/other-user-modal/other-user-modal.component';
import { EditProfileModalComponent } from './shared/dialogs/edit-profile-modal/edit-profile-modal.component';
import { ChangePasswordModalComponent } from './shared/dialogs/change-password-modal/change-password-modal.component';

import { SignInGuard } from './modules/sign-in/sign-in.guard';

@NgModule({
  declarations: [
    AppComponent,
    RequestAchievementModalComponent,
    SayThanksModalComponent,
    LeaveCommentModalComponent,
    OtherUserModalComponent,
    SignInComponent,
    EditProfileModalComponent,
    ChangePasswordModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BadgesModule,
    DashboardModule,
    SignInModule,
    HeaderModule,
    HttpClientModule
  ],
  providers: [
    SignInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
