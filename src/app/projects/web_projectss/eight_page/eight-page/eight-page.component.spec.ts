import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightPageComponent } from './eight-page.component';

describe('EightPageComponent', () => {
  let component: EightPageComponent;
  let fixture: ComponentFixture<EightPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
