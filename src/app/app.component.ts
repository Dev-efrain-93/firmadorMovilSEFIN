import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, AlertController, ModalController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { UpdatePage } from '../pages/update/update';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HomePage;
  updatePage = UpdatePage;
  appVersionNumber: string = '0.0.0';
  iosEnterpriseEndpointLatest: string = 'https://github.com/Dev-efrain-93/firmadorMovilSEFIN/releases/download/latest/FirmadorMovilSEFIN.json';
  iosEnterpriseEndpointPlist: string = 'https://github.com/Dev-efrain-93/firmadorMovilSEFIN/releases/download/manifest/FirmadorMovilSEFIN.plist';
  

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public http: HTTP,
    public alertCtrl: AlertController,
    public appVersion: AppVersion,
    public modalCtrl: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#198d7e");
      if (this.platform.is('ios')) {
        this.iosUpdateCheck();
      }
      this.splashScreen.hide();
      
    });
  }  

  iosUpdateCheck() {

    this.appVersion.getVersionNumber().then((version)=> {
      this.appVersionNumber = version;
    }).catch((err)=>{
      console.log("Error: " + err);
    });


    this.http.get(this.iosEnterpriseEndpointLatest, {}, {})
    .then(data => {
      let jsonObject = JSON.parse(data.data);
      if (jsonObject.version === this.appVersionNumber) {

        let updatePageModal = this.modalCtrl.create(this.updatePage, { newAppVersionNumber: jsonObject.version }, { showBackdrop: false, enableBackdropDismiss: false });
        updatePageModal.present();

        /** 
        let confirm = this.alertCtrl.create({
          title: 'Actualización Disponible',
          message: 'Una nueva actualización de Firmador Móvil SEFIN esta disponible. Por favor, le recomendamos actualizar para seguir disfrutando las últimas funcionalidades de la aplicación.',
          buttons: [
              {
                text: 'Actualizar',
                handler: () => {
                  try {
                    console.log("Redirigiendo a itms-services://?action=download-manifest&url=" + this.iosEnterpriseEndpointPlist);
                    window.location.href = "https://dev-efrain-93.github.io/firmadorMovilSEFIN/";
                  } catch(err) {
                    console.log(err);
                  }
                }
              }
            ]
        });

        confirm.present();
        */
      } else {
        alert('Su aplicación se encuentra actualizada');
      }
    })
    .catch(error => {
      alert("latest json file not found");
    });
  }
}
