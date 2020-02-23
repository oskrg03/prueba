import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {
    
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
    
  }
  
  path : string = 'https://api.bnext.io/partner_test/user?id=';
  
  loadUsers(numero:string){
     //console.log(this.path+numero);

    return this.http
    .get(this.path+numero)
    
  }
}