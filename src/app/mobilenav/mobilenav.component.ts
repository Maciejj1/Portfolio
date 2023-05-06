import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, VERSION } from "@angular/core";

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss'],
  animations: [
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
    ])
  ]
})
  export class MobilenavComponent {
    name = "Angular " + VERSION.major;
    mobileMenuOpen: boolean = false;
  
    get openCloseTrigger() {
      return this.mobileMenuOpen ? "open" : "closed";
    }
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }