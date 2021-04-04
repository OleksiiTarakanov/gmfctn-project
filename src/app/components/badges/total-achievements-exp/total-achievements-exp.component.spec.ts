import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAchievementsExpComponent } from './total-achievements-exp.component';

describe('TotalAchievementsExpComponent', () => {
  let component: TotalAchievementsExpComponent;
  let fixture: ComponentFixture<TotalAchievementsExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalAchievementsExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAchievementsExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
