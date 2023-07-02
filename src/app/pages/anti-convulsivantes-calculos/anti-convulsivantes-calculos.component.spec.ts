import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiConvulsivantesCalculosComponent } from './anti-convulsivantes-calculos.component';

describe('AntiConvulsivantesCalculosComponent', () => {
  let component: AntiConvulsivantesCalculosComponent;
  let fixture: ComponentFixture<AntiConvulsivantesCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiConvulsivantesCalculosComponent]
    });
    fixture = TestBed.createComponent(AntiConvulsivantesCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
