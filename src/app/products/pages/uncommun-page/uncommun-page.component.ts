import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommun-page',
  templateUrl: './uncommun-page.component.html',
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
export class UncommunPageComponent {
  public name:string="Fernando"
  public gender:"male"|"female" ="male"
  public initationmap= {
    "male":"invitarlo",
    "female":"invitarla"
  }
  showElement = false;
  toggleElement() {
    this.showElement = !this.showElement;
  }
  public changeClient():void{
    this.name="Melissa"
    this.gender="female"
  }
  public clients:string[]=["Jose","Miguel","Mauricio","Elena","Ana"]
  public deleteClient():void{
    this.clients.shift()
  }
  public clinentsMap={
    "=0":"No tenemos ningun cliente",
    "=1":"cliente esperando",
    "other":"clientes esperando"
  }
  public person={
    name:"Nicolas",
    age:"23",
    direction:"Av orillas del zamaora"
  }
  public myObservable:Observable<number> = interval(2000).pipe(
    tap(value => console.log(value))
  );
  
}
