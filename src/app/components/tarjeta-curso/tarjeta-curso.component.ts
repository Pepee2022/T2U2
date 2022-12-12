import { Component, EventEmitter ,Input ,OnInit, Output } from '@angular/core';
import { Paqueterias } from '../../model/paqueterias';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-tarjeta-curso',
  templateUrl: './tarjeta-curso.component.html',
  styleUrls: ['./tarjeta-curso.component.scss']
})
export class TarjetaCursoComponent implements OnInit {

  @Input() curso: Paqueterias = {
    id: "",
    nombre: "",
    // capacidad: 0,
    precio: 0
    // descripcion: "",
    // imagen: "",


  };
  @Output() pressAgregar = new EventEmitter();

  constructor(private shoppingCartService: ShoppingCartService) {

  }

  ngOnInit(): void {
  }

  clickAgregar(id: string): void {
    console.log("Se a presionado el boton Agregar. ");
    this.pressAgregar.emit(id);
  }

  clickAgregarCarrito(): void {
    this.shoppingCartService.agregarElementoCarrito(this.curso, 1);
  }
}
