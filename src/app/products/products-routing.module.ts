import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommunPageComponent } from './pages/uncommun-page/uncommun-page.component';

const routes: Routes = [ {
  path:"",
  component:BasicPageComponent
},
{
  path:"numbers",
  component:NumbersPageComponent
},
{
  path:"uncommun",
  component:UncommunPageComponent
},
 {
  path:"**",
  redirectTo:""
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
