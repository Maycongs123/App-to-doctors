import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaxativosComponent } from './laxativos.component';

describe('LaxativosComponent', () => {
  let component: LaxativosComponent;
  let fixture: ComponentFixture<LaxativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaxativosComponent]
    });
    fixture = TestBed.createComponent(LaxativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
