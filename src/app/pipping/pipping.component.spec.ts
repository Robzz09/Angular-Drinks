import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PippingComponent } from './pipping.component';

describe('PippingComponent', () => {
  let component: PippingComponent;
  let fixture: ComponentFixture<PippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
