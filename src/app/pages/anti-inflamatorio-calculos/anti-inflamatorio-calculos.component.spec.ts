import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiInflamatorioCalculosComponent } from './anti-inflamatorio-calculos.component';

describe('AntiInflamatorioCalculosComponent', () => {
  let component: AntiInflamatorioCalculosComponent;
  let fixture: ComponentFixture<AntiInflamatorioCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiInflamatorioCalculosComponent]
    });
    fixture = TestBed.createComponent(AntiInflamatorioCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
