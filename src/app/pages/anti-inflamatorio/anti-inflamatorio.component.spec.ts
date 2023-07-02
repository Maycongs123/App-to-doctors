import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiInflamatorioComponent } from './anti-inflamatorio.component';

describe('AntiInflamatorioComponent', () => {
  let component: AntiInflamatorioComponent;
  let fixture: ComponentFixture<AntiInflamatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiInflamatorioComponent]
    });
    fixture = TestBed.createComponent(AntiInflamatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
