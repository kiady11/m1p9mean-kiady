import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementPlatComponent } from './paiement-plat.component';

describe('PaiementPlatComponent', () => {
  let component: PaiementPlatComponent;
  let fixture: ComponentFixture<PaiementPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
