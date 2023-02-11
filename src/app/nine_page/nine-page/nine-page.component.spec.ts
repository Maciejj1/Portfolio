import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinePageComponent } from './nine-page.component';

describe('NinePageComponent', () => {
  let component: NinePageComponent;
  let fixture: ComponentFixture<NinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
