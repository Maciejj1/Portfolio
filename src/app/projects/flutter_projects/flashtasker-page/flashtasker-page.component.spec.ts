import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashtaskerPageComponent } from './flashtasker-page.component';

describe('FlashtaskerPageComponent', () => {
    let component: FlashtaskerPageComponent;
    let fixture: ComponentFixture<FlashtaskerPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FlashtaskerPageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FlashtaskerPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
