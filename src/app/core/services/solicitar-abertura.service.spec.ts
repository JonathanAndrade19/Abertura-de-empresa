import { TestBed } from '@angular/core/testing';

import { SolicitarAberturaService } from './solicitar-abertura.service';

describe('SolicitarAberturaService', () => {
  let service: SolicitarAberturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitarAberturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
