import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiParasitariosComponent } from './anti-parasitarios.component';

describe('AntiParasitariosComponent', () => {
  let component: AntiParasitariosComponent;
  let fixture: ComponentFixture<AntiParasitariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiParasitariosComponent]
    });
    fixture = TestBed.createComponent(AntiParasitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
