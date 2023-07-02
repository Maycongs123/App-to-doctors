import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorticosteroidesCalculosComponent } from './corticosteroides-calculos.component';

describe('CorticosteroidesCalculosComponent', () => {
  let component: CorticosteroidesCalculosComponent;
  let fixture: ComponentFixture<CorticosteroidesCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorticosteroidesCalculosComponent]
    });
    fixture = TestBed.createComponent(CorticosteroidesCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
