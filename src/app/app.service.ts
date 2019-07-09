import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 


  url = 'http://inncomun.com:5000/';

  apiKey = ''; // <-- Enter your own key here!
 

  constructor(private http: HttpClient) { }





   traeusuarios(): Observable<any> {
    return this.http.get(this.url+'usuarios/').pipe(
      map(results => results)
    );

   }


   registra(uuid){

       return this.http.get(this.url+'registra/'+uuid).pipe(
      map(results => results)
    );



   }


    mensajes(uuid){

       return this.http.get(this.url+'mensajes/'+uuid).pipe(
      map(results => results)
    );



   }


    profesiones(){

       return this.http.get(this.url+'profesiones/').pipe(
      map(results => results)
    );



   }


   miperfil(uuid){

       return this.http.get(this.url+'miperfil/'+uuid).pipe(
      map(results => results)
    );



   }


   actualiza(uuid,data){

      this.http.post(this.url+'actualiza/'+uuid, data)
    .subscribe(
      data => {

      })



   }


     actualizaperfil(uuid,data){

      this.http.post(this.url+'actualizaperfil/'+uuid, data)
    .subscribe(
      data => {

      })



   }


   guardamensaje(uuid,data){

      this.http.post(this.url+'guardamensaje/'+uuid, data)
    .subscribe(
      data => {

      })



   }



  }
