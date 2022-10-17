import { Component, EventEmitter ,Input ,OnInit, Output } from '@angular/core';
import { curso } from '../../model/curso';

@Component({
  selector: 'app-tarjeta-curso',
  templateUrl: './tarjeta-curso.component.html',
  styleUrls: ['./tarjeta-curso.component.scss']
})
export class TarjetaCursoComponent implements OnInit {
  
  @Input() curso: curso = {
    id: "",
    capacidad: 0,
    precio: 0,
    descripcion: "",
    imagen: "",
    nombre: ""

  };
  @Output() pressAgregar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickAgregar(id: string): void {
    console.log("Se a presionado el boton Agregar. ");
    this.pressAgregar.emit(id);
  }
}
