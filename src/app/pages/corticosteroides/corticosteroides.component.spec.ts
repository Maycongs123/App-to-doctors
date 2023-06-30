import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorticosteroidesComponent } from './corticosteroides.component';

describe('CorticosteroidesComponent', () => {
  let component: CorticosteroidesComponent;
  let fixture: ComponentFixture<CorticosteroidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorticosteroidesComponent]
    });
    fixture = TestBed.createComponent(CorticosteroidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
