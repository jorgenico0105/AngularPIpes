import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ShareedModule } from './shareed/shareed.module';

//CONFIGRACION DE IDIOMAS
import localEsp from "@angular/common/locales/es-EC"
import {registerLocaleData} from "@angular/common"
registerLocaleData(localEsp)
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    ShareedModule
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:"es-EC"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
