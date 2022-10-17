import { Injectable } from '@angular/core';
import { curso } from '../model/curso';
import { Paquete } from '../model/paquete.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  cursos: curso[] = [
    {
      id: "c001",
      nombre: "MOS Word Basico",
      precio: 250,
      capacidad: 20,
      descripcion: "El curso incluye un vaucher para rendir el examen de certificacion de Excel",
      imagen: "/assets/img/mos.png"
    },
    {
      id: "c002",
      nombre: "MOS General",
      precio: 350,
      capacidad: 20,
      descripcion: "El curso incluye un vaucher para rendir el examen de certificacion de Micro. MOS.",
      imagen: "/assets/img/mos_excel.png"
    },
    {
      id: "c003",
      nombre: "Microsoft Dyn. 365",
      precio: 400,
      capacidad: 20,
      descripcion: "El curso incluye un vaucher para rendir el examen de certificacion de Microsoft Dyn. 365",
      imagen: "/assets/img/microsoft_dinamic.png"
    },
  ];
  seleccionados: string[] = [];


  paquetes: Paquete[] = [{
    img: '/assets/img/montana.jpg',
    tour: 'Montaña de 7 Colores',
    descripcion: 'A unos 100 kilómetros al sureste de Cusco, Perú, existe un arcoíris hecho montaña.',
    precio: 250
  },
  {
    img: '/assets/img/Palcoyo.jpg',
    tour: 'Cordillera de Palccoyo',
    descripcion: 'destino alternativo a la montaña de colores de Vinicunca con la misma majestuosidad.',
    precio: 400
  },
  {
    img: '/assets/img/valle.jpg',
    tour: '4 Ruinas en Cusco',
    descripcion: 'Lugares de visita: Qoricancha, Sacsayhuaman, Qenqo, Pukapukara, Tambomachay y catedral de Cusco.',
    precio: 300
  }
  ];
  pags: string[] = [];


  constructor() { }

  agregarSeleccion(elemento: string): void {
    this.seleccionados.push(elemento);
  }

  agregarPags(paque: string): void {
    this.pags.push(paque);
  }




}
