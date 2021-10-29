import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from "@angular/common/http"
import { map, throttleTime } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) {
  }
  api = 'http://3.15.230.185:3000';
  api1 = 'http://3.15.230.185:3005';

  Registro(libro)
  {
    console.log(libro)
    return this.http.post<any>(`${this.api1}/esb/libro`,libro);
  }
 getData()
  {
    return this.http.get<any>(`${this.api1}/esb/libro`);
  }

  eliminar(libro)
  {
    console.log(libro)
    return this.http.delete<any>(`${this.api}/libros/libros/${libro}`);
  }

  
  editar(libro,id)
  {
    console.log(libro)
    return this.http.put<any>(`${this.api}/libros/libros/${id}`,libro);
  }

  categoria(libro)
  {
    console.log(libro)
    return this.http.post<any>(`${this.api}/libros/generosLibro/`,libro);
  }

getgenero(id)
  {
    console.log(id)
    return this.http.get<any>(`${this.api}/libros/generosLibro/${id}`);
  }
  agregarbitacora(id)
  {
    console.log(id)
    return this.http.post<any>(`http://3.15.230.185:3100/bitacora/bitacora`,id);
  }

 getbitacora()
  {
    return this.http.get<any>(`http://3.15.230.185:3100/bitacora/bitacora`);
  }

  agregarsolicitud(id)
  {
    console.log(id)
    return this.http.post<any>(`http://3.15.230.185:3300/solicitud/solicitud`,id);
  }
  

 getsolicitud()
  {
    return this.http.get<any>(`http://3.15.230.185:3300/solicitud/solicitud`);
  }

  asignarsolicitud(id,solicitud)
  {
    console.log(id)
    return this.http.put<any>(`http://3.15.230.185:3300/solicitud/asignar/${id}`,solicitud);
  }
}
