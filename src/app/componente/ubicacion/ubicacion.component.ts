// ubicacion.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent {
  nombre: string = '';
  apellido: string = '';
  mensaje: string = '';
  mensajeEnviado: boolean = false;

  nombreEnviado: string = '';
  apellidoEnviado: string = '';

  enviarFormulario() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Mensaje: ${this.mensaje}`);
    
    // Guardar el nombre y apellido ingresados
    this.nombreEnviado = this.nombre;
    this.apellidoEnviado = this.apellido;
    this.mensajeEnviado = true;

    // Limpiar los campos del formulario
    this.nombre = '';
    this.apellido = '';
    this.mensaje = '';
  }
}