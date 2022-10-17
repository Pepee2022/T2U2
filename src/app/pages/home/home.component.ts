import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  seleccionados: string[] = [];

  constructor(private stroreService: StoreService) {
    this.seleccionados = stroreService.seleccionados;
   }

  ngOnInit(): void {
  }

}
