import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

//Plantilla con el formulario que tendrá los datos del usuario
@Component({
  template: `
    <ion-content class="container">
      <div class="header">
        <img class="avatar" src="../../assets/icon/bnextlogo.png" alt="" />
      </div>

      <div class="informacion">
        <h2>Prestamo salvavidas <ion-icon name="medal"></ion-icon></h2>
        <h4>
          Cuando no te alcanza para cumplir tu objetivo, nosotros te ayudamos a
          que sea posible.
        </h4>
      </div>

      <div class="formulario">
        <form [formGroup]="formGroup">
          <label class="etiqueta" for="name">Nombre</label>
          <ion-input
            required
            name="name"
            formControlName="name"
            type="text"
          ></ion-input>

          <label class="etiqueta" for="surname">Apellido</label>
          <ion-input
            required
            name="surname"
            formControlName="surname"
            type="text"
          ></ion-input>

          <label class="etiqueta" for="phone">Teléfono</label>
          <ion-input
            required
            name="phone"
            formControlName="phone"
            type="text"
          ></ion-input>

          <label class="etiqueta" for="email">Email</label>
          <ion-input
            required
            name="email"
            formControlName="email"
            type="email"
          ></ion-input>

          <label class="etiqueta" for="edad">Edad</label>
          <ion-input
            required
            name="edad"
            formControlName="edad"
            type="number"
          ></ion-input>

          <ion-button class="boton">Solicitar prestamo</ion-button>
        </form>
      </div>
    </ion-content>
  `,
  styleUrls: ["./auth-successful.page.scss"]
})
export class AuthSuccessfulPage implements OnInit {
  url: any; //url con datos del usuario

  public formGroup: FormGroup; //Controlador de formulario

  constructor(private route: Router, private formBuilder: FormBuilder) {}
  data: string[] = []; //Se guardará la información una vez desfragmentada

  //Una vez carge la página
  ngOnInit() {
    //Se obtiene la url
    this.url = this.route.parseUrl(this.route.url).toString();
    //Se separan los valores cada que se encuentra un ;
    let values = this.url.split(";");
    //Se recorre el arreglo de valores desde el segundo elemento, el primero es el nombre de la página
    for (var i = 1; i < values.length; i++) {
      //Se separa el nombre de la variable y su valor
      var val = values[i].split("=");
      //Cuando el valor sea el teléfono se reemplaza el caracter %2B por un +
      val[1] = val[1].replace("%2B", "+");
      //Se guarda en el arreglo data solo los valores obtenidos en la separación anterior
      this.data.push(val[1].trim());
    }
    //Se ejecuta el método para inicializar el formulario
    this.buildForm();
  }
  //Se inicializa el formulario
  private buildForm() {
    //Se relaciona cada campo del formulario con la información correspondiente
    this.formGroup = this.formBuilder.group({
      name: this.data[1],
      surname: this.data[2],
      phone: this.data[3],
      email: this.data[4],
      edad: this.data[5]
    });
  }
}
