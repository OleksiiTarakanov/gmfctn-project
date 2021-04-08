import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAchievementModalComponent } from './request-achievement-modal.component';

describe('RequestAchievementModalComponent', () => {
  let component: RequestAchievementModalComponent;
  let fixture: ComponentFixture<RequestAchievementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAchievementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAchievementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
