import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss'],
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
    ])
  ]
})
export class WebProjectsComponent {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // show content after 5 seconds
  }
}
