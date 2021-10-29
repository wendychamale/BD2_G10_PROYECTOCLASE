import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImpuestoService {
  api = 'http://3.15.230.185:3200'
  constructor(
    private http: HttpClient
    ) { }

    getPaises(){
      return this.http.get<any>(`${this.api}/tax/tax`);
    }
    

}
