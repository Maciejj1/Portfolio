import { Component, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(1000, style({ opacity: 0 }))
      ])
    ]),
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          opacity: 1,
          transform: "scale(1, 1)"
        })
      ),
      state(
        "closed",
        style({
          opacity: 0,
          transform: "scale(0.95, 0.95)"
        })
      ),
      transition("open => closed", [animate("100ms ease-in")]),
      transition("closed => open", [animate("200ms ease-out")])
    ]),
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ]

})
export class HomeComponent {
  isLoading = true;
  constructor(private el: ElementRef) {}
  logo = 'assets/logo5.png';

  scrollToElement(id: string): void {
    const element = this.el.nativeElement.querySelector('#' + id);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // show content after 5 seconds
  }
  mobileMenuOpen: boolean = false;

  get openCloseTrigger() {
    return this.mobileMenuOpen ? "open" : "closed";
  }
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
