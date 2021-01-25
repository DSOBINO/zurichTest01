import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratanteGestionComponent } from './contratante-gestion.component';

describe('ContratanteGestionComponent', () => {
  let component: ContratanteGestionComponent;
  let fixture: ComponentFixture<ContratanteGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratanteGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratanteGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
