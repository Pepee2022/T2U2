import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/commons/menu/menu.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { GaleriaComponent } from './components/producto/galeria/galeria.component';
import { DetalleProductoComponent } from './components/producto/detalle-producto/detalle-producto.component';
import { CursosCortosComponent } from './pages/cursos-cortos/cursos-cortos.component';
import { HomeComponent } from './pages/home/home.component';
import { GaleriaCursosComponent } from './components/galeria-cursos/galeria-cursos.component';
import { TarjetaCursoComponent } from './components/tarjeta-curso/tarjeta-curso.component';
import { GuardadoGaleriaComponent } from './components/producto/guardado-galeria/guardado-galeria.component';
import { FormatoGaleriaComponent } from './components/producto/formato-galeria/formato-galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    GaleriaComponent,
    DetalleProductoComponent,
    CursosCortosComponent,
    HomeComponent,
    GaleriaCursosComponent,
    TarjetaCursoComponent,
    GuardadoGaleriaComponent,
    FormatoGaleriaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxNavbarModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
