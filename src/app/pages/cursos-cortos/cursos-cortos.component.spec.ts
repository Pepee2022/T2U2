import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCortosComponent } from './cursos-cortos.component';

describe('CursosCortosComponent', () => {
  let component: CursosCortosComponent;
  let fixture: ComponentFixture<CursosCortosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCortosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCortosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
