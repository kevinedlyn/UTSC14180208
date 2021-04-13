import { TestBed } from '@angular/core/testing';

import { VarGlobalService } from './var-global.service';

describe('VarGlobalService', () => {
  let service: VarGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
