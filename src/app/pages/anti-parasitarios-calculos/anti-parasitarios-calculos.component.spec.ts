import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiParasitariosCalculosComponent } from './anti-parasitarios-calculos.component';

describe('AntiParasitariosCalculosComponent', () => {
  let component: AntiParasitariosCalculosComponent;
  let fixture: ComponentFixture<AntiParasitariosCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiParasitariosCalculosComponent]
    });
    fixture = TestBed.createComponent(AntiParasitariosCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
