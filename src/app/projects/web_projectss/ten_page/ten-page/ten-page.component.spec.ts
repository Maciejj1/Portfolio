import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTenPageComponent } from './ten-page.component';

describe('SevenPageComponent', () => {
  let component: WebTenPageComponent;
  let fixture: ComponentFixture<WebTenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebTenPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebTenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
