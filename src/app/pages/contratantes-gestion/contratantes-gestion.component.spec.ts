import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratantesGestionComponent } from './contratantes-gestion.component';

describe('ContratantesGestionComponent', () => {
  let component: ContratantesGestionComponent;
  let fixture: ComponentFixture<ContratantesGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratantesGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratantesGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
