import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintomaticosComponent } from './sintomaticos.component';

describe('SintomaticosComponent', () => {
  let component: SintomaticosComponent;
  let fixture: ComponentFixture<SintomaticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SintomaticosComponent]
    });
    fixture = TestBed.createComponent(SintomaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
