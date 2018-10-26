import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detalles-cadenas-selladas',
  templateUrl: 'detalles-cadenas-selladas.html'
})
export class DetallesCadenasSelladasPage {
  selectedItem: any;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
