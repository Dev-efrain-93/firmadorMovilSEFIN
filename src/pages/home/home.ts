import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadenasSelladasPage } from '../cadenas-selladas/cadenas-selladas';
import { ConfigurarLlavePage } from '../configurar-llave/configurar-llave';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }

  btnListarCadenasSelladas(event) {
    this.navCtrl.push(CadenasSelladasPage);
  }

  btnConfigurarLlave(event) {
    this.navCtrl.push(ConfigurarLlavePage);
  }
}
