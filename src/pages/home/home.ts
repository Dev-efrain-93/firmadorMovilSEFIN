import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadenasSelladasPage } from '../cadenas-selladas/cadenas-selladas';
import { ConfigurarLlavePage } from '../configurar-llave/configurar-llave';
import {ScannerPage} from '../scanner/scanner';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  appVersionNumber: string = 'v';
  constructor(public navCtrl: NavController, private appVersion: AppVersion) { 
    this.appVersion.getVersionNumber().then((version)=>{
      this.appVersionNumber += version;
    }).catch((err)=>{
      console.debug("Error: " + err);
      this.appVersionNumber = "[Versión no disponible]";
    });
  }

  btnListarCadenasSelladas(event) {
    this.navCtrl.push(CadenasSelladasPage);
  }

  btnConfigurarLlave(event) {
    this.navCtrl.push(ConfigurarLlavePage);
  }

  btnScannear(event) {
    this.navCtrl.push(ScannerPage);
  }
}
