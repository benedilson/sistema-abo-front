import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcMedioPorIdadeComponent } from './imc-medio-por-idade.component';

describe('ImcMedioPorIdadeComponent', () => {
  let component: ImcMedioPorIdadeComponent;
  let fixture: ComponentFixture<ImcMedioPorIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcMedioPorIdadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcMedioPorIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
