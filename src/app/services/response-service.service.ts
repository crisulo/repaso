import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponseServiceService {

  constructor(private httpClient:HttpClient) { }

  consultarUsuario(id:String){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
  }

  consultarUsuarios(){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
  }
}
