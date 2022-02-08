import { TestBed } from '@angular/core/testing';

import { MycontractService } from './mycontract.service';

describe('MycontractService', () => {
  let service: MycontractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycontractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
