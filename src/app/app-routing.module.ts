import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { UbicacionComponent } from './componente/ubicacion/ubicacion.component';
import { ContactoComponent } from './componente/contacto/contacto.component';
import { InstalacionOSComponent } from './especialidades/instalacion-os/instalacion-os.component';
import { ReparacionComponent } from './especialidades/reparacion/reparacion.component';
import { SWOficinaComponent } from './especialidades/swoficina/swoficina.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';

const routes: Routes = [
  
  { path: "", 
    component:InicioComponent

   },
  { path: "inicio", 
    component:InicioComponent

   },
  { path: "ubicacion",
     component:UbicacionComponent 

  },
  { path: "contacto",
     component:ContactoComponent

   },
  { path: "especialidades/instalacion-os",
    component: InstalacionOSComponent
  },
  { path: "especialidades/reparacion",
    component: ReparacionComponent
  },
  { path: "especialidades/swoficina",
    component: SWOficinaComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
