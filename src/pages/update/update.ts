import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})
export class UpdatePage {
  newAppVersionNumber: string = 'v0.0.0';
  constructor(public navCtrl: NavController, public platform: Platform, private appVersion: AppVersion, public navParams: NavParams) { 
    this.newAppVersionNumber = 'v' + this.navParams.get('newAppVersionNumber');
  }

}
