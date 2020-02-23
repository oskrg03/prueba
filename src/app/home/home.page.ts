import { Component, OnInit } from "@angular/core";
import { HttpProvider } from "../providers/http";
import { from } from "rxjs";
import { Router } from '@angular/router'



@Component({
  template: `
<ion-content padding [fullscreen]="false">
</ion-content>
  `,
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  numero: string; //Número que se obtendrá de la url
  data: any[] = []; //Información que se obtendrá de la API externa
  status: Number;//Estado de la respuesta que se obtendrá de la API externa

  constructor(public http: HttpProvider,private route: Router) {

  }
//Una vez cargue la página
  ngOnInit() {
    //Se obtiene el número de la url
    this.numero = this.route.parseUrl(this.route.url).queryParams['id'];
    //Se verifica que exista el usuario
    this.verificarUsuario();
    
  } 

  //Obtiene la data del API y almacena los datos en las variables
  verificarUsuario() {

    //Se llama a la función del servicio http que nos permite obtener la información de la API
    this.http.loadAnswer(this.numero).subscribe(
      res => {//Si existe respuesta
        //Se obtiene el estado de la misma
        this.status = Number.parseInt(res["status"]);
        //Se verifica si el usuario existe si el estado es 200
        if (this.status == 200) {
          //Se obtiene la información asociada a la respuesta
          this.data = res["data"];
          //Se pasa a la página del formulario y se envía la información en la url          
          this.route.navigate(['/auth-successful', this.data]);
          
        }else{
          //Sino existe el usuario se envía a la página de error
          this.route.navigate(['/auth-fail']);
        }
      },
      err => {
        //Si ocurre algún error se envía a la página de error
        console.log("ocurrió un error");
        this.route.navigate(['/auth-fail']);
          
      }
    );
    
  }

  

}
