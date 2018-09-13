import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ParametrosComponent } from 'src/app/pages/parametros/parametros.component';
import { ResolveServiceGuard } from 'src/app/guards/resolve-service.guard';
import { RedireccionComponentComponent } from 'src/app/pages/redireccion-component/redireccion-component.component';
import { ParamsOpcionalesComponent } from 'src/app/pages/params-opcionales/params-opcionales.component';
import { EnrutamientoAnidadoComponent } from 'src/app/pages/enrutamiento-anidado/enrutamiento-anidado.component';
import { Hijo1Component } from 'src/app/pages/hijo1/hijo1.component';
import { Hijo2Component } from 'src/app/pages/hijo2/hijo2.component';
import { Hijo3Component } from 'src/app/pages/hijo3/hijo3.component';
import { GuardHIjosGuard } from 'src/app/guards/guard-hijos.guard';
import { ResolveServiceHijoGuard } from 'src/app/guards/resolve-service-hijo.guard';
import { Hijoshare1Component } from 'src/app/pages/hijoshare1/hijoshare1.component';
import { ShareInformationComponent } from 'src/app/pages/share-information/share-information.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'pag1/:id', component: ParametrosComponent, resolve: { post: ResolveServiceGuard}},
{ path: 'pag2', component: RedireccionComponentComponent },
{ path: 'pag3', component: ParamsOpcionalesComponent },
{ path: 'pag4', component: EnrutamientoAnidadoComponent, 
canActivateChild: [GuardHIjosGuard],
children: [
  {
    path: 'hijo1',
    component: Hijo1Component, resolve: { post: ResolveServiceHijoGuard}
  },
  {
    path: 'hijo2',
    component: Hijo2Component
  },
  {
    path: 'hijo3/:id',
    component:Hijo3Component , resolve: { post: ResolveServiceGuard}
  },
  { path: '', redirectTo: 'uno',pathMatch: 'full'},
]},
{ path: 'pag5', component: ShareInformationComponent},
{ path: 'home', component: HomeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
