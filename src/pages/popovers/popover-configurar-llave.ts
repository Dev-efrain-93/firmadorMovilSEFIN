import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-popover-configurar-llave',
    templateUrl: 'popover-configurar-llave.html'
})
export class PopoverConfigurarLlavePage {

   constructor (public viewCtrl: ViewController, 
             public navParams: NavParams) {
   }

   btnConfigHuellaDigitalPatron(event) {
       console.log("Huella Digital y Patron");
       this.viewCtrl.dismiss();
   }

   btnConfigHuellaDigitalPIN(event) {
       console.log("Huella Digital y PIN");
       this.viewCtrl.dismiss();
   }

}