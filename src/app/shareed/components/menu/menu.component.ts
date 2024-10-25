import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public items:MenuItem[]=[];
  ngOnInit(){
    this.items=[
      {label:"Pipes de angular" ,icon:"pi pi-desktop",items:[
        {routerLink:" " ,label:"Textos y fechas",icon:"pi pi-align-left"},
        {routerLink:"numbers" ,label:"Números",icon:"pi pi-dollar"},
        {routerLink:"uncommun" ,label:"No comunes",icon:"pi pi-globe"},
      ]},
      {label:"Pipes personalizados",icon:"pi pi-cog",
        items: [
          {label:"Otro elemento ",icon:"pi pi-cog"}
        ]
      },
    ]
  }
}
