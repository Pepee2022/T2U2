import { Component, Input ,OnInit } from '@angular/core';
import { Paqueterias } from 'src/app/model/paqueterias';
import { StoreService } from 'src/app/services/store.service'

@Component({
  selector: 'app-galeria-cursos',
  templateUrl: './galeria-cursos.component.html',
  styleUrls: ['./galeria-cursos.component.scss']
})
export class GaleriaCursosComponent implements OnInit {

  @Input() elementos: Paqueterias[] = [];
  seleccionados: string[] = [];
  // seleccionados: number = 0;

  constructor(private storeService: StoreService) {
    this.seleccionados = storeService.seleccionados;
   }

  ngOnInit(): void {
  }

  seleccionar(id: string): void {
    // this.seleccionados++;
    // this.seleccionados.push(id);
    this.storeService.agregarSeleccion(id);
    console.log(this.seleccionados);
  }
}
