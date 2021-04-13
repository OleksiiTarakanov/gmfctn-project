import { SayThanksModalComponent } from '../say-thanks-modal/say-thanks-modal.component';

import { AhievementListService } from 'src/app/shared/services/ahievement-list.service';

import { Component, OnInit } from '@angular/core';
import { Achievelist } from 'src/app/shared/models/achievelist';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-request-achievement-modal',
  templateUrl: './request-achievement-modal.component.html',
  styleUrls: ['./request-achievement-modal.component.scss']
})
export class RequestAchievementModalComponent implements OnInit {

  achivementList: Achievelist[] = this.achievementService.achievements;

  achievementName: string = '';
  achievementMessage: string = '';
  achievementRequest: object = {};

  achieveForm: FormGroup = new FormGroup({});

  constructor(
    private readonly achievementService: AhievementListService,
    private readonly formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.achieveForm = this.formBuilder.group({
      achievementName: this.formBuilder.control(this.achievementName, Validators.required),
      achievementMessage: this.formBuilder.control(this.achievementMessage, Validators.required)
    });
  };

  onSubmit(): void {
    if (this.achieveForm.valid) {
      this.achievementRequest = this.achieveForm.value;
      this.dialog.closeAll();
      this.dialog.open(SayThanksModalComponent);
    };
  };

  onClose(): void {
    this.dialog.closeAll();
  };
}
