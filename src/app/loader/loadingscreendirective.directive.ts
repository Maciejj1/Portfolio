import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoadingScreenService } from './loadingscreenservice.service';

@Directive({
  selector: 'router-outlet[LoaderComponent]',
})
export class LoadingScreenDirective implements OnChanges {
  @Input('loadingScreen') loadingScreen: boolean = false;

  constructor(private elementRef: ElementRef, private loadingScreenService: LoadingScreenService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['loadingScreen'] && changes['loadingScreen'].currentValue) {
      this.elementRef.nativeElement.classList.add('loading');
    } else {
      this.elementRef.nativeElement.classList.remove('loading');
    }
  }
}

