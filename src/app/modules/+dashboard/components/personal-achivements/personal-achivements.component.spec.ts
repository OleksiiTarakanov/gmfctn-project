import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAchivementsComponent } from './personal-achivements.component';

describe('PersonalAchivementsComponent', () => {
  let component: PersonalAchivementsComponent;
  let fixture: ComponentFixture<PersonalAchivementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAchivementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
