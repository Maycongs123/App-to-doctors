import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntibioticosCalculosComponent } from './antibioticos-calculos.component';

describe('AntibioticosCalculosComponent', () => {
  let component: AntibioticosCalculosComponent;
  let fixture: ComponentFixture<AntibioticosCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntibioticosCalculosComponent]
    });
    fixture = TestBed.createComponent(AntibioticosCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
