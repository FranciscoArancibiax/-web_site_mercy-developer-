import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { UbicacionComponent } from './componente/ubicacion/ubicacion.component';
import { ContactoComponent } from './componente/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InstalacionOSComponent } from './especialidades/instalacion-os/instalacion-os.component';
import { SWOficinaComponent } from './especialidades/swoficina/swoficina.component';
import { ReparacionComponent } from './especialidades/reparacion/reparacion.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicacionComponent,
    ContactoComponent,
    FooterComponent,
    NavbarComponent,
    InstalacionOSComponent,
    SWOficinaComponent,
    ReparacionComponent,
    EspecialidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
