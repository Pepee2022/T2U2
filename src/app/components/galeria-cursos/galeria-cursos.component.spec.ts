import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaCursosComponent } from './galeria-cursos.component';

describe('GaleriaCursosComponent', () => {
  let component: GaleriaCursosComponent;
  let fixture: ComponentFixture<GaleriaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
