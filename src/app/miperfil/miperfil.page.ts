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
  key:any;
  sexos:any=[{'id':1,'nombre':'Masculino'},{'id':2,'nombre':'Femenino'}]
  any:any
  teta:any

  constructor(private device: Device,private appservice: AppService) { 


   


  	this.appservice.profesiones().subscribe(data=>{


  		this.profesiones= data

      this.teta =this.profesiones[1]


  	})


    this.device.uuid


  	this.appservice.miperfil('b76ef1c621142662').subscribe(data=>{


      console.log(data[0])

       this.miperfil=data[0]


  	})


  }

  ngOnInit() {



  }


  actualizaperfil(data){


  	console.log(data)

  	this.appservice.actualizaperfil(this.device.uuid,data)

  }

}
