import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

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
          <ion-input name="name" formControlName="name" type="text"></ion-input>

          <label class="etiqueta" for="surname">Apellido</label>
          <ion-input
            name="surname"
            formControlName="surname"
            type="text"
          ></ion-input>

          <label class="etiqueta" for="phone">Teléfono</label>
          <ion-input
            name="phone"
            formControlName="phone"
            type="text"
          ></ion-input>

          <label class="etiqueta" for="email">Email</label>
          <ion-input
            name="email"
            formControlName="email"
            type="email"
          ></ion-input>

          <label class="etiqueta" for="edad">Edad</label>
          <ion-input
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
  nombre: any;

  public formGroup: FormGroup;

  constructor(private route: Router, private formBuilder: FormBuilder) {}
  data: string[] = [];
  ngOnInit() {
    this.nombre = this.route.parseUrl(this.route.url).toString();

    let values = this.nombre.split(";");

    for (var i = 1; i < values.length; i++) {
      var val = values[i].split("=");
      console.log(val[1]);
      val[1] = val[1].replace("%2B", "+");
      this.data.push(val[1].trim());
    }
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: this.data[1],
      surname: this.data[2],
      phone: this.data[3],
      email: this.data[4],
      edad: this.data[5]
    });
  }
}
