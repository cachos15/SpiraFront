import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesCursosComponent } from './acciones-cursos.component';

describe('AccionesCursosComponent', () => {
  let component: AccionesCursosComponent;
  let fixture: ComponentFixture<AccionesCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
