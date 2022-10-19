import { Component, EventEmitter ,Input ,OnInit, Output } from '@angular/core';
import { Paquete } from 'src/app/model/paquete.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  paquetes: Paquete[] = [
  ];

  ngOnInit(): void {
  }

  @Input() paquete: Paquete = {
    imge: "",
    tour: "" ,
    descripcion: "",
    precio: 0,

  };

  @Output() pressAgregarP = new EventEmitter();

  constructor(private storeService: StoreService) { 
    this.paquetes = storeService.paquetes;
    console.log("galeria.component.ts - " + this.paquetes.length);
  }

  clickAgregarP(tour: string): void {
    console.log("Se a presionado el boton Agregar. ");
    this.pressAgregarP.emit(tour);
  }

  eliminarPaquete(posicion: number): void {
    this.paquetes.splice(posicion, 1)
  }


}
