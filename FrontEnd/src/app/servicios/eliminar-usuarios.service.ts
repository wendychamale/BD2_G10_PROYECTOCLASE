import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarUsuariosService {

  api = 'http://3.15.230.185:3000'
  constructor(
    private http: HttpClient
    ) { }

  getUsuarios(){
    return this.http.get<any>(`${this.api}/cliente/cliente`);
  }
  
  eliminarUsuarios(id){
    return this.http.delete<any>(`${this.api}/cliente/cliente/${id}`);
  }

}
