import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaEliminarComponent } from './mascota-eliminar.component';

describe('MascotaEliminarComponent', () => {
  let component: MascotaEliminarComponent;
  let fixture: ComponentFixture<MascotaEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaEliminarComponent]
    });
    fixture = TestBed.createComponent(MascotaEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
