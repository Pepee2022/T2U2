import { Component, OnInit } from '@angular/core';
import { curso } from 'src/app/model/curso';
import { StoreService } from 'src/app/services/store.service'

@Component({
  selector: 'app-cursos-cortos',
  templateUrl: './cursos-cortos.component.html',
  styleUrls: ['./cursos-cortos.component.scss']
})
export class CursosCortosComponent implements OnInit {

  cursos: curso[] = [
  ];

  constructor(private storeService: StoreService) { 
    this.cursos = storeService.cursos;
  }

  ngOnInit(): void {
  }

}

