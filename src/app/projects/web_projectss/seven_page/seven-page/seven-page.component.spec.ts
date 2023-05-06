import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenPageComponent } from './seven-page.component';

describe('SevenPageComponent', () => {
  let component: SevenPageComponent;
  let fixture: ComponentFixture<SevenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
