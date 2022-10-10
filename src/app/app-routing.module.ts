import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './components/producto/detalle-producto/detalle-producto.component';
import { GaleriaComponent } from './components/producto/galeria/galeria.component';

const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalleProducto', component: DetalleProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
