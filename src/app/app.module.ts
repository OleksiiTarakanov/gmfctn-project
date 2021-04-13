import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BadgesModule } from './modules/badges/badges.module';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SignInModule } from './modules/sign-in/sign-in.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { NavComponent } from './modules/header/nav/nav.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BadgesComponent } from './modules/badges/badges.component';
import { UserComponent } from './modules/header/user/user.component';
import { LeaveCommentModalComponent } from './shared/dialogs/leave-comment-modal/leave-comment-modal.component';
import { SidebarContentComponent } from './modules/header/sidebar-content/sidebar-content.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { RequestAchievementModalComponent } from './shared/dialogs/request-achievement-modal/request-achievement-modal.component';
import { SayThanksModalComponent } from './shared/dialogs/say-thanks-modal/say-thanks-modal.component';
import { OtherUserModalComponent } from './shared/dialogs/other-user-modal/other-user-modal.component';
import { EditProfileModalComponent } from './shared/dialogs/edit-profile-modal/edit-profile-modal.component';
import { ChangePasswordModalComponent } from './shared/dialogs/change-password-modal/change-password-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    BadgesComponent,
    UserComponent,
    RequestAchievementModalComponent,
    SayThanksModalComponent,
    LeaveCommentModalComponent,
    OtherUserModalComponent,
    SidebarContentComponent,
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
    SignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
