import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';
import { FirmaPage } from '../firma/firma';

@Component({
    selector: "page-scanner",
    templateUrl: "scanner.html"
})

export class ScannerPage {
    qrJSON: any;
    constructor(public navController: NavController, private qrScanner: QRScanner, private alertController: AlertController) {

        // Optionally request the permission early
        this.qrScanner.prepare()
        .then((status: QRScannerStatus) => {
        if (status.authorized) {
            // camera permission was granted
            // start scanning
            let scanSub = this.qrScanner.scan().subscribe((text: string) => {     
                this.qrJSON = JSON.parse(text);     
                if(this.qrJSON.APPSolicitante && this.qrJSON.PostBack)
                {
                    this.navController.push(FirmaPage, {jsonQRCode: text });
                    this.qrScanner.hide(); // hide camera preview
                    scanSub.unsubscribe(); // stop scanning  
                } else{
                    alert("El código capturado no cumple la estructura esperada. Intente de nuevo");
                }
                
            });

            this.qrScanner.resumePreview();

            // show camera preview
            this.qrScanner.show()
            .then((data : QRScannerStatus)=> {
                console.log("Status scanner- IsShowing: " + data.showing);
            },err => {
                console.log("Status scanner- IsShowing: " + err);

            });

        } else if (status.denied) {
            // camera permission was permanently denied
            // you must use QRScanner.openSettings() method to guide the user to the settings page
            // then they can grant the permission from there
            alert("Permiso denegado");
            this.qrScanner.openSettings();
            this.navController.pop();
            
        } else {
            // permission was denied, but not permanently. You can ask for permission again at a later time.
            alert("Permiso denegado. Intente mas tarde");
            this.navController.pop();
        }
        })
        .catch((e: any) =>{
            alert('Error is:' + e)
            this.navController.pop();
        });
    }

    presentConfirm(qrString) {
        let alert = this.alertController.create({
          title: '',
          message: 'Código capturado. Desea continuar para firmar ?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Continuar',
              handler: () => {
                this.navController.push(FirmaPage, {jsonQRCode: qrString });
              }
            }
          ]
        });
        alert.present();
      }
}