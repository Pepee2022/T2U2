import { Component, EventEmitter ,Input ,OnInit, Output } from '@angular/core';
import { Paquete } from 'src/app/model/paquete.model';

@Component({
  selector: 'app-formato-galeria',
  templateUrl: './formato-galeria.component.html',
  styleUrls: ['./formato-galeria.component.scss']
})
export class FormatoGaleriaComponent implements OnInit {

  @Input() paquete: Paquete = {
    imge: "",
    tour: "" ,
    descripcion: "",
    precio: 0,

  };
  @Output() pressAgregarP = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickAgregarP(tour: Paquete): void {
    console.log("Se a presionado el boton Agregar. ");
    this.pressAgregarP.emit(tour);
  }

}
