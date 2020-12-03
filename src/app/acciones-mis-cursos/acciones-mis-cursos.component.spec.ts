import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesMisCursosComponent } from './acciones-mis-cursos.component';

describe('AccionesMisCursosComponent', () => {
  let component: AccionesMisCursosComponent;
  let fixture: ComponentFixture<AccionesMisCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesMisCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesMisCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
