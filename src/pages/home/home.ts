import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { CadenasSelladasPage } from '../cadenas-selladas/cadenas-selladas';
import { ConfigurarLlavePage } from '../configurar-llave/configurar-llave';
import { ScannerPage } from '../scanner/scanner';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  appVersionNumber: string = 'v0.0.0';
  constructor(public navCtrl: NavController, public platform: Platform, private appVersion: AppVersion, public modalCtrl: ModalController) { 
    this.platform.ready().then((readySource)=> {
      this.appVersion.getVersionNumber().then((version)=> {
        this.appVersionNumber = 'v' + version;
      }).catch((err)=>{
        console.log("Error: " + err);
        this.appVersionNumber = "[Versión no disponible: " + err + "]";
      });
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
