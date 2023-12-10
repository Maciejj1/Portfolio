import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebElevenPageComponent } from './eleven-page.component';

describe('SevenPageComponent', () => {
  let component: WebElevenPageComponent;
  let fixture: ComponentFixture<WebElevenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebElevenPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebElevenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
