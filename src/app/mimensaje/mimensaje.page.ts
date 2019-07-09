import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { DetallemensajeComponent } from '../detallemensaje/detallemensaje.component';



@Component({
  selector: 'app-mimensaje',
  templateUrl: './mimensaje.page.html',
  styleUrls: ['./mimensaje.page.scss'],
})
export class MimensajePage implements OnInit {


	mensajes:any;

  constructor(private storage: Storage,private appservice: AppService,private modalController: ModalController) { 




  	 this.storage.get('uuid').then((val) => {


  	 	this.mensajes = this.appservice.mensajes(val)


  	 })


  	


  }

  ngOnInit() {



  }



    async detallemensaje(data) {

    const modal =  await  this.modalController.create({
      component: DetallemensajeComponent,
      componentProps: { value: data}
    });
    return  await  modal.present();
    
  }


}
