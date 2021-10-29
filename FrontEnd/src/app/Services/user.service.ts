import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from "@angular/common/http"
import { map, throttleTime } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = 'http://3.15.230.185:3005';

  constructor(private http: HttpClient) {
   }

  Registro(usuario)
  {
    console.log(usuario)
    return this.http.post<any>(`${this.api}/esb/cliente`,usuario);
  }


  grupos(grupo)
  {
  
    return this.http.post<any>(`${this.api}/esb/asignarGrupo`,grupo);
  }
}
