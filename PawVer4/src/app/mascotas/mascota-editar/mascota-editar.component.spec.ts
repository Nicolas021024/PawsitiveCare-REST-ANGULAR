import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaEditarComponent } from './mascota-editar.component';

describe('MascotaEditarComponent', () => {
  let component: MascotaEditarComponent;
  let fixture: ComponentFixture<MascotaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaEditarComponent]
    });
    fixture = TestBed.createComponent(MascotaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
