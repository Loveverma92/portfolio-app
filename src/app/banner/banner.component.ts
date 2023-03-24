import { animate, keyframes, sequence, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('bounce', [
      state('active', style({transform: 'translateY(0)'})),
      transition('* => active', [
        sequence([
          style({ transform: 'translateY(0)'}),
          animate("400ms cubic-bezier(0,0,0,1)", style({ transform: 'translateY(-14px)' })),
          animate("300ms cubic-bezier(1,0,1,1)", style({ transform: 'translateY(0)' })),
          animate("200ms cubic-bezier(0,0,0,1)", style({ transform: 'translateY(-10px)' })),
          animate("150ms cubic-bezier(1,0,1,1)", style({ transform: 'translateY(0)' })),
          animate("100ms cubic-bezier(0,0,0,1)", style({ transform: 'translateY(-5px)' })),
          animate("80ms cubic-bezier(1,0,1,1)", style({ transform: 'translateY(0)' })),
        ]),
      ])
    ]),
  ]
})
export class BannerComponent {
  state = '';
  onDownArrowMouseIn() {
    this.state = "active";
  }
  onDownArrowMouseOut() {
    this.state = "";
  }
  onDownArrowClick() {
    this.scrollTo("work-experience");
  }
  scrollTo(section: string) {
    document?.querySelector('#' + section)?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
