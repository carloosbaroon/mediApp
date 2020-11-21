import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalConstants } from './common/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = GlobalConstants.siteTitle;
  patientsNavigate: any;
  doctorsNavigate: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    console.log(GlobalConstants.dbURL);
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.doctorsNavigate =
        [
          {
            title : 'Busqueda',
            url   : '/home-doctor',
            icon  : 'home'
          },
          {
            title : 'Recetar',
            url   : '/prescribe',
            icon  : 'chatboxes'
          },
          {
            title : 'Configuraciones',
            url   : '/settings-doctor',
            icon  : 'settings'
          },
        ];

    this.patientsNavigate =
          [
              {
                  title : 'Vista general',
                  url   : '/home-patient',
                  icon  : 'home'
              },
              {
                  title : 'Recetar',
                  url   : '/prescribe',
                  icon  : 'chatboxes'
              },
              {
                  title : 'Configuraciones',
                  url   : '/settings-patient',
                  icon  : 'settings'
              },
          ];
  }

}
