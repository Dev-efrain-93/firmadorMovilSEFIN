import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetallesCadenaFirmaPage} from '../detalles-cadenas-firma/detalles-cadena-firma';

@Component({
    selector: "page-firma",
    templateUrl: "firma.html"
})
export class FirmaPage{
    qrParam: string;
    jsonQRCode: any;
    constructor(public navController: NavController, public navParams: NavParams) {
        this.qrParam = navParams.get('jsonQRCode');
        this.jsonQRCode = JSON.parse(this.qrParam);
        if(!this.jsonQRCode.APPSolicitante && !this.jsonQRCode.PostBack) {
            alert("El código capturado no cumple la estructura esperada. Intente de nuevo");
            this.navController.pop();
        }            
    }

    actionShowDetailsString(event, appSolicitante, cadena) {
        this.navController.push(DetallesCadenaFirmaPage, { appSolicitante: appSolicitante, cadena: cadena });
    }
}