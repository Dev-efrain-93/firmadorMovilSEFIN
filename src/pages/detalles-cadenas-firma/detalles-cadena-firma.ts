import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


@Component({
    selector : 'page-detalles-cadena-firma',
    templateUrl: 'detalles-cadena-firma.html'
})
export class DetallesCadenaFirmaPage {
    cadena: any;
    appSolicitante: string = '';

    constructor(public navController: NavController, public navParams: NavParams) {
        this.appSolicitante = this.navParams.get('appSolicitante');
        this.cadena = this.navParams.get('cadena');
    }
}