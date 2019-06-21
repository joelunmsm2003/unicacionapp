import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 



  url = 'http://comunica7.com/';
  apiKey = ''; // <-- Enter your own key here!
 

  constructor(private http: HttpClient) { }





   traecliente(tipo: string): Observable<any> {
    return this.http.get(this.url+'apirestcap/public/propuesta/filtrocliente/'+tipo+'/null').pipe(
      map(results => results)
    );

   }


   
  }
