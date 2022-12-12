import { Component,OnInit } from '@angular/core';
import { ElementoCarrito } from 'src/app/model/elemento-carrito';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carrito: ElementoCarrito[] = [];
  total: number = this.shoppingCartService.total;


  constructor(private shoppingCartService: ShoppingCartService) {
    this.carrito = this.shoppingCartService.carrito;
    this.actualizaTotal();
  }

  ngOnInit(): void {
  }

  actualizaTotal(): void {
    this.total = this.shoppingCartService.total;
  }

}

