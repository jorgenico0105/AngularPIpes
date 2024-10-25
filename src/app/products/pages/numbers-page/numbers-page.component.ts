import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 1 })),
      state('out', style({ height: '0px', opacity: 0 })),
      transition('out => in', [
        animate('300ms ease-in-out'),
      ]),
      transition('in => out', [
        animate('300ms ease-in-out'),
      ]),
    ]),
  ],
})
export class NumbersPageComponent {
  public totalsells: number = 5588884555;
  public percent: number = 0.4856;
  showElement = false;
  toggleElement() {
    this.showElement = !this.showElement;
  }
}
