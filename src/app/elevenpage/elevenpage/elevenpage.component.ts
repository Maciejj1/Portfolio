import { Component } from '@angular/core';

@Component({
  selector: 'app-elevenpage',
  templateUrl: './elevenpage.component.html',
  styleUrls: ['./elevenpage.component.scss'],
})
export class ElevenpageComponent {
  plane = 'assets/PaperPlaneTilt2.png';
  call = 'assets/WhatsappLogo2.png';
  copy = 'assets/CopySimple2.png';
  onMouseOver() {
    const phoneNumber = '+48 512-912-539'; // Wstaw swój numer telefonu tutaj
    const textElement = document.querySelector('.elevenpage_container_base_chose_phone_container_text');
    if (textElement) {
      textElement.textContent = phoneNumber;
    }
  }
}
