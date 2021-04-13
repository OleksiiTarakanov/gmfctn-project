import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUserModalComponent } from './other-user-modal.component';

describe('OtherUserModalComponent', () => {
  let component: OtherUserModalComponent;
  let fixture: ComponentFixture<OtherUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherUserModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
