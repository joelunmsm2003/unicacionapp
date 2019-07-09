import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Device } from '@ionic-native/device/ngx';
import {
  ToastController,
  Platform,
  ModalController,
  LoadingController,
  AlertController,
  NavParams
} from '@ionic/angular';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

	name:any;

	descripcion:any;

	foto:any;

  mensaje:any={}

  destino:any;

  constructor(private device: Device,public modalController: ModalController,public navParams:NavParams,private appservice: AppService,) {


  	console.log('sjjs',navParams['data']['value'])

  	this.name= navParams['data']['value'].get("name")

  	this.descripcion= navParams['data']['value'].get("address")

  	this.foto= navParams['data']['value'].get("foto")

    this.destino= navParams['data']['value'].get("id")


   }

  ngOnInit() {}


     async myDismiss() {
      const result: Date = new Date();
      
      await this.modalController.dismiss(result);
    }


    onSubmit(data){


      data.destino=this.destino

      this.appservice.guardamensaje(this.device.uuid,data)

      this.myDismiss()



    }

}
