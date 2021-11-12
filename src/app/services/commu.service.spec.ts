/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommuService } from './commu.service';

describe('Service: Commu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommuService]
    });
  });

  it('should ...', inject([CommuService], (service: CommuService) => {
    expect(service).toBeTruthy();
  }));
});
