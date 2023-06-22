import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiConvulsivantesComponent } from './anti-convulsivantes.component';

describe('AntiConvulsivantesComponent', () => {
  let component: AntiConvulsivantesComponent;
  let fixture: ComponentFixture<AntiConvulsivantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiConvulsivantesComponent]
    });
    fixture = TestBed.createComponent(AntiConvulsivantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
