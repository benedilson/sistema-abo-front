import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadePossiveisDoadoresComponent } from './quantidade-possiveis-doadores.component';

describe('QuantidadePossiveisDoadoresComponent', () => {
  let component: QuantidadePossiveisDoadoresComponent;
  let fixture: ComponentFixture<QuantidadePossiveisDoadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantidadePossiveisDoadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantidadePossiveisDoadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
