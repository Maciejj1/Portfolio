import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoneNumberPageComponent } from './lone_number.component';

describe('LoneNumberPageComponent', () => {
  let component: LoneNumberPageComponent;
  let fixture: ComponentFixture<LoneNumberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoneNumberPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoneNumberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
