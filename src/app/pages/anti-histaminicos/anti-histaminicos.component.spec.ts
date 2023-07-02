import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiHistaminicosComponent } from './anti-histaminicos.component';

describe('AntiHistaminicosComponent', () => {
  let component: AntiHistaminicosComponent;
  let fixture: ComponentFixture<AntiHistaminicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiHistaminicosComponent]
    });
    fixture = TestBed.createComponent(AntiHistaminicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
