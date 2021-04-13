import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCommentModalComponent } from './leave-comment-modal.component';

describe('LeaveCommentModalComponent', () => {
  let component: LeaveCommentModalComponent;
  let fixture: ComponentFixture<LeaveCommentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveCommentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCommentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
