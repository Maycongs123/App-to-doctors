import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhaDeParadaComponent } from './folha-de-parada.component';

describe('FolhaDeParadaComponent', () => {
  let component: FolhaDeParadaComponent;
  let fixture: ComponentFixture<FolhaDeParadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolhaDeParadaComponent]
    });
    fixture = TestBed.createComponent(FolhaDeParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
