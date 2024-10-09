import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosClienteComponent } from './amigos-cliente.component';

describe('AmigosClienteComponent', () => {
  let component: AmigosClienteComponent;
  let fixture: ComponentFixture<AmigosClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmigosClienteComponent]
    });
    fixture = TestBed.createComponent(AmigosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
