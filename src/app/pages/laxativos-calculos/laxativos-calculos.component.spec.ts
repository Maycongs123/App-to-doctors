import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaxativosCalculosComponent } from './laxativos-calculos.component';

describe('LaxativosCalculosComponent', () => {
  let component: LaxativosCalculosComponent;
  let fixture: ComponentFixture<LaxativosCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaxativosCalculosComponent]
    });
    fixture = TestBed.createComponent(LaxativosCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
