import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {
    
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
    
  }
  //Url de la API para obtener respuesta
  path : string = 'https://api.bnext.io/partner_test/user?id=';
  
  //Función que recibe el número y obtiene la respuesta por petición GET
  loadAnswer(numero:string){
     //console.log(this.path+numero);
    //Retorna la respuesta obtenida de la API
    return this.http
    .get(this.path+numero)
    
  }
}