import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
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
export class BasicPageComponent {
  public nameLower:string="fernando"
  public nameUpper:string="FERNANDO"
  public fullName:string ="FerNaNdo HerReRa"
  public cusomDate:Date=new Date()
  showElement = false;

  toggleElement() {
    this.showElement = !this.showElement;
  }
}
