import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoGaleriaComponent } from './formato-galeria.component';

describe('FormatoGaleriaComponent', () => {
  let component: FormatoGaleriaComponent;
  let fixture: ComponentFixture<FormatoGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatoGaleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatoGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
