import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable()
export class PersonaService {

  personas: Persona[];

  constructor() {
    this.personas = [
      new Persona('Mario', 'Navarrete', 25, true),
      new Persona('Rocio', 'Garcia', 15, false),
      new Persona('Laura', 'Robles', 28, true),
      new Persona('Lorenzo', 'Romero', 70, false)
    ];
  }

  getAll(): Persona[] {
    return this.personas;
  }

  create(persona: Persona): void {
    this.personas.push(persona);
  }

  cuentaHabiente(): Promise<Persona[]> {
    const prom = new Promise<Persona[]>((resolve, reject) => {
      const arrTemp: Persona[] = [];
      for (const persona of this.personas) {
        if (persona.cuentaBancaria) {
          arrTemp.push(persona);
        }
      }
      resolve(arrTemp);
    });
    return prom;
  }

  cuentaHabienteV2(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      resolve(this.personas.filter(persona => persona.cuentaBancaria));
    });
  }
}
