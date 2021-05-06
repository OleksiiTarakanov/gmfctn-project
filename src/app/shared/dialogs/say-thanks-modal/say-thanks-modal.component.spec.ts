import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayThanksModalComponent } from './say-thanks-modal.component';

describe('SayThanksModalComponent', () => {
  let component: SayThanksModalComponent;
  let fixture: ComponentFixture<SayThanksModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayThanksModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayThanksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
