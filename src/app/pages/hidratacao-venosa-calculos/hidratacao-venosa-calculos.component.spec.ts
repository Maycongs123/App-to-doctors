import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidratacaoVenosaCalculosComponent } from './hidratacao-venosa-calculos.component';

describe('HidratacaoVenosaCalculosComponent', () => {
  let component: HidratacaoVenosaCalculosComponent;
  let fixture: ComponentFixture<HidratacaoVenosaCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HidratacaoVenosaCalculosComponent]
    });
    fixture = TestBed.createComponent(HidratacaoVenosaCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
