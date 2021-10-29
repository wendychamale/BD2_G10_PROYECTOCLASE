import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AprobarEditorialService {

  api = 'http://3.15.230.185:3000'
  constructor(
    private http: HttpClient
    ) { }

  getEditoriales()
  {
    return this.http.get<any>(`${this.api}/cliente//clienteAprobar`);
  }

  putEditoria(id)
  {
    return this.http.put<any>(`${this.api}/cliente//clienteAprobar/${id}`,{});
  }
}
