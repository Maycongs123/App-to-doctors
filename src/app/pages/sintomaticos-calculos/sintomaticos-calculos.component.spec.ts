import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintomaticosCalculosComponent } from './sintomaticos-calculos.component';

describe('SintomaticosCalculosComponent', () => {
  let component: SintomaticosCalculosComponent;
  let fixture: ComponentFixture<SintomaticosCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SintomaticosCalculosComponent]
    });
    fixture = TestBed.createComponent(SintomaticosCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
