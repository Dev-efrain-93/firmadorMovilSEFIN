import {Component} from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';

import {PopoverConfigurarLlavePage} from '../popovers/popover-configurar-llave';

@Component({
    selector: 'page-configurar-llave',
    templateUrl: 'configurar-llave.html'
})

export class ConfigurarLlavePage{

    constructor(public navController: NavController, public navParams: NavParams, public popoverController: PopoverController ){  }

    btnOpenPopover(event) {
        let popover = this.popoverController.create(PopoverConfigurarLlavePage);
        popover.present({
            ev: event
        });
    }
}