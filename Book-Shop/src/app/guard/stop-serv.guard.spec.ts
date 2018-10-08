import { TestBed, async, inject } from '@angular/core/testing';

import { StopServGuard } from './stop-serv.guard';

describe('StopServGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StopServGuard]
    });
  });

  it('should ...', inject([StopServGuard], (guard: StopServGuard) => {
    expect(guard).toBeTruthy();
  }));
});
