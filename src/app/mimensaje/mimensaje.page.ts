import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-mimensaje',
  templateUrl: './mimensaje.page.html',
  styleUrls: ['./mimensaje.page.scss'],
})
export class MimensajePage implements OnInit {


	mensajes:any;

  constructor(private storage: Storage,private appservice: AppService) { 




  	 this.storage.get('uuid').then((val) => {


  	 	this.mensajes = this.appservice.mensajes(val)


  	 }


  	


  }

  ngOnInit() {



  }

}
