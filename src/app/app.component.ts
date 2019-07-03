import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Storage } from '@ionic/storage';
import { AppService } from './app.service';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {


  public appPages = [
    /*{
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Marker',
      url: '/marker'
    },
    {
      title: 'HtmlInfoWindow',
      url: '/html-info-window'
    },*/
    {
      title: 'Profesionales',
      url: '/marker-cluster'
    }
    /*{
      title: 'Polyline',
      url: '/polyline'
    },
    {
      title: 'Polygon',
      url: '/polygon'
    },
    {
      title: 'Circle',
      url: '/circle'
    },
    {
      title: 'GroundOverlay',
      url: '/ground-overlay'
    },
    {
      title: 'Geocoding',
      url: '/geocoding'
    },
    {
      title: 'TileOverlay',
      url: '/tile-overlay'
    },
    {
      title: 'KmlOverlay',
      url: '/kml-overlay'
    },
    {
      title: 'StreetView',
      url: '/street-view'
    },
    {
      title: 'BaseArrayClass',
      url: '/base-array-class'
    }*/
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private device: Device,
    private storage: Storage,
    private appservice: AppService,
    public backgroundGeolocation: BackgroundGeolocation,
    private localNotifications: LocalNotifications
  ) {
    this.initializeApp();
  }


 showNotification(data){
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: JSON.stringify(data),
      sound: 'file://sound.mp3',
      data: { secret: "key" }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Environment.setEnv({
        // Api key for your server
        // (Make sure the api key should have Website restrictions for your website domain only)
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBZamoub9SCWL2GriEBRSgLGVVrF0QPakk',

        // Api key for local development
        // (Make sure the api key should have Website restrictions for 'http://localhost' only)
        'API_KEY_FOR_BROWSER_DEBUG': '(YOUR_API_KEY_IS_HERE)'
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();

  

      this.storage.set('uuid', this.device.uuid);

     
    

       this.appservice.registra(this.device.uuid).subscribe((result) => {

    })


  const config: BackgroundGeolocationConfig = {
     desiredAccuracy: 10,
    stationaryRadius: 20,
    distanceFilter: 30,
    debug: true, //  enable this hear sounds for background-geolocation life-cycle.
    stopOnTerminate: false, // enable this to clear background location settings when the app terminates
  };

  console.log('start');

 this.backgroundGeolocation.configure(config)
      .then((location: BackgroundGeolocationResponse) => {
 
        console.log(location);
        this.showNotification(location)
        // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
        // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
        // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
        //this.backgroundGeolocation.finish(); // FOR IOS ONLY
 
      });
  // start recording location
  this.backgroundGeolocation.start();



  




    });
  }
















}
