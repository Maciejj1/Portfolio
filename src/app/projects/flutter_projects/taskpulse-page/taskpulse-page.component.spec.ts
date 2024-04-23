import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPulsePageComponent } from './taskpulse-page.component';

describe('TaskPulsePageComponent', () => {
    let component: TaskPulsePageComponent;
    let fixture: ComponentFixture<TaskPulsePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TaskPulsePageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TaskPulsePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
