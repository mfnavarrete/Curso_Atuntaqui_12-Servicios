export class Persona {
    nombre: string;
    apellido: string;
    edad: number;
    cuentaBancaria: boolean;

    constructor(pNombre: string, pApellido: string, pEdad: number, pCuentaBancaria: boolean) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
        this.cuentaBancaria = pCuentaBancaria;
    }
}
