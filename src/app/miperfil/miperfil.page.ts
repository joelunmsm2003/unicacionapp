import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { UsuarioComponent } from '../usuario/usuario.component';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device/ngx';


@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {


	profesiones:any;

	miperfil:any={};
	mi:any;

  constructor(private device: Device,private appservice: AppService) { 


  	this.appservice.profesiones().subscribe(data=>{


  		this.profesiones= data


  	})


  	this.appservice.miperfil(this.device.uuid).subscribe(data=>{


  	})


  }

  ngOnInit() {



  }


  actualizaperfil(data){


  	console.log(data)

  	this.appservice.actualizaperfil(this.device.uuid,data)

  }

}
