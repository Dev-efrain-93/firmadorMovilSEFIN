import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CadenasSelladasPage } from '../pages/cadenas-selladas/cadenas-selladas';
import { DetallesCadenasSelladasPage } from '../pages/detalles-cadenas-selladas/detalles-cadenas-selladas';
import { ConfigurarLlavePage } from '../pages/configurar-llave/configurar-llave';
import { PopoverConfigurarLlavePage } from '../pages/popovers/popover-configurar-llave';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadenasSelladasPage,
    DetallesCadenasSelladasPage, 
    ConfigurarLlavePage,
    PopoverConfigurarLlavePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: "Atrás"
        }
      }      
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadenasSelladasPage,
    DetallesCadenasSelladasPage,
    ConfigurarLlavePage,
    PopoverConfigurarLlavePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  constructor(){}
}
