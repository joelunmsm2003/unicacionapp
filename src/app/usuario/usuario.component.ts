import { Component, OnInit } from '@angular/core';
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

  constructor(public modalController: ModalController,public navParams:NavParams) {


  	console.log('sjjs',navParams['data']['value'])

  	this.name= navParams['data']['value'].get("name")

  	this.descripcion= navParams['data']['value'].get("address")

  	this.foto= navParams['data']['value'].get("foto")


   }

  ngOnInit() {}


     async myDismiss() {
      const result: Date = new Date();
      
      await this.modalController.dismiss(result);
    }


    onSubmit(data){

    	console.log(data)
    }

}
