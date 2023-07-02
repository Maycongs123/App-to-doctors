import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiHistaminicosCalculosComponent } from './anti-histaminicos-calculos.component';

describe('AntiHistaminicosCalculosComponent', () => {
  let component: AntiHistaminicosCalculosComponent;
  let fixture: ComponentFixture<AntiHistaminicosCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiHistaminicosCalculosComponent]
    });
    fixture = TestBed.createComponent(AntiHistaminicosCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
