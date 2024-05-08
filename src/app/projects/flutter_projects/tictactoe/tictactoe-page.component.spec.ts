import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToePageComponent } from './tictactoe-page.component';

describe('ConnectifyPageComponent', () => {
    let component: TicTacToePageComponent;
    let fixture: ComponentFixture<TicTacToePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TicTacToePageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TicTacToePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
