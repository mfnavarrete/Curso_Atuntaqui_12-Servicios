import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Persona } from './models/persona.model';
import { PersonaService } from './servicios/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonaService]
})
export class AppComponent {

  title = 'servicio';
  arrPersonas: Persona[];

  constructor(private personaSvc: PersonaService) { }

  ngOnInit(): void {
    this.arrPersonas = this.personaSvc.getAll();
    console.log(this.arrPersonas);
  }

  onClickAgregarPersona(): void {
    this.personaSvc.create(new Persona('Nuevo', 'Usuario', 45, true));
  }

  async onClickCuentaHabientes() {
    // this.personaSvc.cuentaHabiente()
    //   .then(arrTempPersonas => console.log(arrTempPersonas))
    //   .catch(err => console.log(err));

    this.arrPersonas = await this.personaSvc.cuentaHabienteV2();
  }

}
