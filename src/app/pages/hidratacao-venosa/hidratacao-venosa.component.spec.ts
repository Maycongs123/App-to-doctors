import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidratacaoVenosaComponent } from './hidratacao-venosa.component';

describe('HidratacaoVenosaComponent', () => {
  let component: HidratacaoVenosaComponent;
  let fixture: ComponentFixture<HidratacaoVenosaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HidratacaoVenosaComponent]
    });
    fixture = TestBed.createComponent(HidratacaoVenosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
