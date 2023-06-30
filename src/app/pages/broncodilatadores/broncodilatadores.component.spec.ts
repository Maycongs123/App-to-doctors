import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroncodilatadoresComponent } from './broncodilatadores.component';

describe('BroncodilatadoresComponent', () => {
  let component: BroncodilatadoresComponent;
  let fixture: ComponentFixture<BroncodilatadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BroncodilatadoresComponent]
    });
    fixture = TestBed.createComponent(BroncodilatadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
