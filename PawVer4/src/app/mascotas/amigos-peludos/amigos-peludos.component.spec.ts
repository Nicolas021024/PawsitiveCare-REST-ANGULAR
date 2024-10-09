import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosPeludosComponent } from './amigos-peludos.component';

describe('AmigosPeludosComponent', () => {
  let component: AmigosPeludosComponent;
  let fixture: ComponentFixture<AmigosPeludosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmigosPeludosComponent]
    });
    fixture = TestBed.createComponent(AmigosPeludosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
