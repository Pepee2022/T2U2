import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardadoGaleriaComponent } from './guardado-galeria.component';

describe('GuardadoGaleriaComponent', () => {
  let component: GuardadoGaleriaComponent;
  let fixture: ComponentFixture<GuardadoGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardadoGaleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardadoGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
