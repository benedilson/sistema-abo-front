import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadeCandidatoPorEstadoComponent } from './quantidade-candidato-por-estado.component';

describe('QuantidadeCandidatoPorEstadoComponent', () => {
  let component: QuantidadeCandidatoPorEstadoComponent;
  let fixture: ComponentFixture<QuantidadeCandidatoPorEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantidadeCandidatoPorEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantidadeCandidatoPorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
