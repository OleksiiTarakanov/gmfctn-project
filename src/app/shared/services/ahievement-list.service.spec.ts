import { TestBed } from '@angular/core/testing';

import { AhievementListService } from './ahievement-list.service';

describe('AhievementListService', () => {
  let service: AhievementListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhievementListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
