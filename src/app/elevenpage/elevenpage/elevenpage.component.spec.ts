import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenpageComponent } from './elevenpage.component';

describe('ElevenpageComponent', () => {
  let component: ElevenpageComponent;
  let fixture: ComponentFixture<ElevenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevenpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
