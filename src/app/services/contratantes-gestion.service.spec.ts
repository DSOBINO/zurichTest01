import { TestBed } from '@angular/core/testing';

import { ContratantesGestionService } from './contratantes-gestion.service';

describe('ContratantesGestionService', () => {
  let service: ContratantesGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratantesGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
