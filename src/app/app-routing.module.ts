import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './components/producto/detalle-producto/detalle-producto.component';
import { GaleriaComponent } from './components/producto/galeria/galeria.component';
import { CursosCortosComponent } from './pages/cursos-cortos/cursos-cortos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/detalleProducto', pathMatch: 'full' },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalleProducto', component: DetalleProductoComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cursosCortos', component: CursosCortosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
