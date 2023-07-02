import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiFungicosCalculosComponent } from './anti-fungicos-calculos.component';

describe('AntiFungicosCalculosComponent', () => {
  let component: AntiFungicosCalculosComponent;
  let fixture: ComponentFixture<AntiFungicosCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiFungicosCalculosComponent]
    });
    fixture = TestBed.createComponent(AntiFungicosCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
