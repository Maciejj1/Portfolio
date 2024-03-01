import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectifyPageComponent } from './connectify-page.component';

describe('ConnectifyPageComponent', () => {
    let component: ConnectifyPageComponent;
    let fixture: ComponentFixture<ConnectifyPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConnectifyPageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ConnectifyPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
