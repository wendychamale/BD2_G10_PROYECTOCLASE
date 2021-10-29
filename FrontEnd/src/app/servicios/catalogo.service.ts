import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  api = 'http://3.15.230.185:3000';
  api1 = 'http://3.15.230.185:3005'
  constructor(
    private http: HttpClient
    ) { }

  getLibros()
  {
    return this.http.get<any>(`${this.api1}/esb/libro`);
  }

  comprar(compra){
    return this.http.post<any>(`${this.api1}/esb/comprar`,compra);
  }

  getCompras()
  {
    return this.http.get<any>(`${this.api}/comprar/listar`);
  }

  putEstado(id,orden)
  {
    return this.http.put<any>(`${this.api}/comprar/estado/${id}`,orden);
  }

  getOrdenes(id)
  {
    return this.http.get<any>(`${this.api}/comprar/user/${id}`);
  }
}
