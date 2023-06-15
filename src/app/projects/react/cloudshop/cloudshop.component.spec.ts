import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudshopComponent } from './cloudshop.component';

describe('CloudshopComponent', () => {
  let component: CloudshopComponent;
  let fixture: ComponentFixture<CloudshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
