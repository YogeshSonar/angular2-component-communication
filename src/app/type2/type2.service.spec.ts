/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Type2Service } from './type2.service';

describe('Type2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Type2Service]
    });
  });

  it('should ...', inject([Type2Service], (service: Type2Service) => {
    expect(service).toBeTruthy();
  }));
});
