import { Injectable } from '@angular/core';
import { Paqueterias } from '../model/paqueterias';
import { ElementoCarrito } from '../model/elemento-carrito';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  carrito: ElementoCarrito[] = [];
  total: number = 0;

  constructor() { }

  agregarElementoCarrito(curso: Paqueterias, cantidad: number): void {
    let elementoCarrito = this.buscarCarrito(curso);
    if (elementoCarrito === undefined) {
      let nuevoElemento = this.nuevoElementoCarrito();
      nuevoElemento.curso = curso;
      nuevoElemento.cantidad = cantidad;
      nuevoElemento.subtotal = cantidad * curso.precio
      this.carrito.push(nuevoElemento)
    } else {
      elementoCarrito.cantidad += cantidad;
      elementoCarrito.subtotal = elementoCarrito.cantidad * elementoCarrito.curso.precio;
    }
    this.calcularTotalCarrito();

  }

  buscarCarrito(curso: Paqueterias): ElementoCarrito | undefined {
    return this.carrito.find(elementoCarrito => {
      return curso.id === elementoCarrito.curso.id;
    });
  }

  calcularTotalCarrito(): void {
    this.total = 0;
    this.carrito.forEach(elemento => {
      this.total += elemento.subtotal;
    });
  }

  nuevoElementoCarrito(): ElementoCarrito{
    return{
      id: 'c001',
      curso: {
        id: "0",
        nombre: "",
        precio: 0,
        // capacidad: 0,
        // descripcion: "",
        // imagen: ""
      },
      cantidad: 0,
      subtotal: 0.0
    }

  }

}
