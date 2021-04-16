import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [PersonaService]
})
export class ListaComponent implements OnInit {

  arrPersonas: Persona[];

  constructor(private personaSvc: PersonaService) { }

  ngOnInit(): void {
    this.arrPersonas = this.personaSvc.getAll();
  }

}
