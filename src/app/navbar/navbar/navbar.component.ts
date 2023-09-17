import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private el: ElementRef) {}
  scrollToElement(id: string): void {
    const element = this.el.nativeElement.querySelector('#' + id);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  logo = 'assets/logo2.png';
}
