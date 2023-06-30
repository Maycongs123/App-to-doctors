import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiFungicosComponent } from './anti-fungicos.component';

describe('AntiFungicosComponent', () => {
  let component: AntiFungicosComponent;
  let fixture: ComponentFixture<AntiFungicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiFungicosComponent]
    });
    fixture = TestBed.createComponent(AntiFungicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
