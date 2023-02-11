import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenPageComponent } from './ten-page.component';

describe('TenPageComponent', () => {
  let component: TenPageComponent;
  let fixture: ComponentFixture<TenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
