import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterProjectsComponent } from './flutter-projects.component';

describe('FlutterProjectsComponent', () => {
  let component: FlutterProjectsComponent;
  let fixture: ComponentFixture<FlutterProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlutterProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlutterProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
