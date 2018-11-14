import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, AlertController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

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
    public appVersion: AppVersion
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#198d7e");
      this.splashScreen.hide();

      if (this.platform.is('ios')) {
        this.iosUpdateCheck();
        alert('Buscando actualizaciones..');
      }else{
        alert('Platform is not ios');
      }
      
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
      let jsonObject = data.data;
      alert('jsonObject.version:' + jsonObject.version);
      alert('appVersionNumber:' + this.appVersionNumber);
      if (jsonObject.version !== this.appVersionNumber) {
        this.alertCtrl.create({
          title: 'Actualización Disponible',
          message: 'Una nueva actualización de Firmador Móvil SEFIN esta disponible. Por favor, le recomendamos actualizar para seguir disfrutando las últimas funcionalidades de la aplicación.',
          buttons: [
            {
              text: 'Actualizar',
              handler: () => {
                console.log('iosUpdateCheck: update clicked');
                 window.window.open(`<a href="itms-services://?action=download-manifest&url=${this.iosEnterpriseEndpointPlist}" />`,'_system');
              }
            },
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                console.log('iosUpdateCheck: exit clicked');
                this.platform.exitApp();
              }
            },
          ]
        }).present();
      }else{
        alert('Su aplicación se encuentra actualizada');
      }
    })
    .catch(error => {
      alert("latest json file not found");
    });
  }
}
