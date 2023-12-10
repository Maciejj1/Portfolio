import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNinePageComponent } from './nine-page.component';

describe('SevenPageComponent', () => {
  let component: WebNinePageComponent;
  let fixture: ComponentFixture<WebNinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebNinePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebNinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
