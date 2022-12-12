import { Component, OnInit } from '@angular/core';
import { Paqueterias } from 'src/app/model/paqueterias';
import { PaqueteriasServiceService } from 'src/app/services/paqueterias.service.service'

@Component({
  selector: 'app-cursos-cortos',
  templateUrl: './cursos-cortos.component.html',
  styleUrls: ['./cursos-cortos.component.scss']
})
export class CursosCortosComponent implements OnInit {

  cursos: Paqueterias[] = [
  ];

  constructor(private PaqueteriasServiceService: PaqueteriasServiceService) {
  }

  ngOnInit(): void {
    this.PaqueteriasServiceService.getAllPaquetes()
      .subscribe(data => {
        this.cursos = data;
      });
  }

}

