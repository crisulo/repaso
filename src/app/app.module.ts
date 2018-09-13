import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';
import { HttpClientModule } from '@angular/common/http';
import { RedireccionComponentComponent } from './pages/redireccion-component/redireccion-component.component';
import { ParamsOpcionalesComponent } from './pages/params-opcionales/params-opcionales.component';
import { ResponseServiceService } from 'src/app/services/response-service.service';
import { EnrutamientoAnidadoComponent } from './pages/enrutamiento-anidado/enrutamiento-anidado.component';
import { Hijo1Component } from './pages/hijo1/hijo1.component';
import { Hijo2Component } from './pages/hijo2/hijo2.component';
import { Hijo3Component } from './pages/hijo3/hijo3.component';
import { Hijoshare1Component } from './pages/hijoshare1/hijoshare1.component';
import { Hijoshare2Component } from './pages/hijoshare2/hijoshare2.component';
import { ShareInformationService } from 'src/app/services/share-information.service';
import { ShareInformationComponent } from './pages/share-information/share-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ParametrosComponent,
    RedireccionComponentComponent,
    ParamsOpcionalesComponent,
    EnrutamientoAnidadoComponent,
    Hijo1Component,
    Hijo2Component,
    Hijo3Component,
    Hijoshare1Component,
    Hijoshare2Component,
    ShareInformationComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResponseServiceService,ShareInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
