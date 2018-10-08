import { TestBed } from '@angular/core/testing';

import { ServIt1Service } from './serv-it-1.service';

describe('ServIt1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServIt1Service = TestBed.get(ServIt1Service);
    expect(service).toBeTruthy();
  });
});
