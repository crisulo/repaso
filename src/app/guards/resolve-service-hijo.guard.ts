import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResponseServiceService } from 'src/app/services/response-service.service';

@Injectable({
  providedIn: 'root'
})

export class ResolveServiceHijoGuard implements Resolve<any> {
  constructor(private httpClient: HttpClient, private servicioConsulta:ResponseServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
  return this.servicioConsulta.consultarUsuarios(); 
}
}
