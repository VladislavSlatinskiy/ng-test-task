import { TestBed } from '@angular/core/testing';

import { GoogleTranslateService } from './googletranslate.service';

describe('GoogletranslateService', () => {
  let service: GoogleTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
