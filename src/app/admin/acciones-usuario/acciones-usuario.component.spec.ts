import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesUsuarioComponent } from './acciones-usuario.component';

describe('AccionesUsuarioComponent', () => {
  let component: AccionesUsuarioComponent;
  let fixture: ComponentFixture<AccionesUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
