import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { ElementoCarrito } from 'src/app/model/elemento-carrito';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-tarjeta-carrito',
  templateUrl: './tarjeta-carrito.component.html',
  styleUrls: ['./tarjeta-carrito.component.scss']
})
export class TarjetaCarritoComponent implements OnInit {

  @Input() elemento: ElementoCarrito = this.shoppingCartService.nuevoElementoCarrito();
  @Output() evento = new EventEmitter();

  constructor(private shoppingCartService: ShoppingCartService) {

   }

  ngOnInit(): void {
  }

  recalcula(): void {
    this.elemento.subtotal = this.elemento.cantidad * this.elemento.curso.precio;
    this.shoppingCartService.calcularTotalCarrito();
    this.evento.emit();
  }
}
