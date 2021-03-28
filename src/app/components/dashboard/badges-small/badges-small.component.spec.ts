import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesSmallComponent } from './badges-small.component';

describe('BadgesSmallComponent', () => {
  let component: BadgesSmallComponent;
  let fixture: ComponentFixture<BadgesSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
