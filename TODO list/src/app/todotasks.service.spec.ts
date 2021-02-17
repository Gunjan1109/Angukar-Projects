/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodotasksService } from './todotasks.service';

describe('Service: Todotasks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodotasksService]
    });
  });

  it('should ...', inject([TodotasksService], (service: TodotasksService) => {
    expect(service).toBeTruthy();
  }));
});
