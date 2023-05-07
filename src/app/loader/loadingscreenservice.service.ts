import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingScreenService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._isLoading.next(true);
      } else {
        this._isLoading.next(false);
      }
    });
  }
}
