import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paqueterias } from '../model/paqueterias';

@Injectable({
  providedIn: 'root',
})
export class PaqueteriasServiceService {
  constructor(private http: HttpClient) {}

  getAllPaquetes() {
    return this.http.get<Paqueterias[]>(
      'http://localhost:3000/api/v6/paquetes'
    );
  }
}
