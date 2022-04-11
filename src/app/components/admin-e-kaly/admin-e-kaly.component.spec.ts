import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEKalyComponent } from './admin-e-kaly.component';

describe('AdminEKalyComponent', () => {
  let component: AdminEKalyComponent;
  let fixture: ComponentFixture<AdminEKalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEKalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEKalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
