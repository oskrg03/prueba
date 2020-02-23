import { Component, OnInit } from "@angular/core";
import { HttpProvider } from "../providers/http";
import { from } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router'



@Component({
  template: `
  <ion-header translucent>
  <ion-toolbar>
    <ion-title>Inicio</ion-title>
  </ion-toolbar>
</ion-header>   
<ion-content padding [fullscreen]="false">

    
</ion-content>
  `,
  styleUrls: ["./home.page.scss"]
})

/*

 


*/
export class HomePage implements OnInit {
  numero: string;
  data: any[] = []; 
  status: Number;

  constructor(public http: HttpProvider,private route: Router) {

  }

  ngOnInit() {
    
    this.numero = this.route.parseUrl(this.route.url).queryParams['id'];
    this.verificarUsuario();
    
  } 

  //Obtiene la data del API y almacena los datos en las variables
  verificarUsuario() {


    this.http.loadUsers(this.numero).subscribe(
      res => {
        this.status = Number.parseInt(res["status"]);
        //Se verifica si el usuario existe
   
        if (this.status == 200) {
          
          this.data = res["data"];

          
          this.route.navigate(['/auth-successful', this.data]);
          
        }else{
          this.route.navigate(['/auth-fail']);
        }
      },
      err => {
        console.log("ocurrió un error");
        this.route.navigate(['/auth-fail']);
          
      }
    );
    
  }

  

}
