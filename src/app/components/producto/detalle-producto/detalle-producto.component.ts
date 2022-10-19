import { Component, OnInit } from '@angular/core';
import { Paquete } from 'src/app/model/paquete.model';
import { StoreService } from 'src/app/services/store.service'

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  pags: Paquete[] = [];

  constructor(private stroreService: StoreService) { 
    this.pags = stroreService.carrito;
  }

  eliminarPaquete(posicion: number): void {
    this.pags.splice(posicion, 1)
  }

  ngOnInit(): void {
  }

}

