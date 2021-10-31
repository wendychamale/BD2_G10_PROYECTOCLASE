import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from "@angular/common/http"
import { map, throttleTime } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  constructor(private http: HttpClient) {
  }
  api = 'http://3.15.230.185:3000';


 getTablaRanking()
  {
    return this.http.get<any>(`http://3.15.230.185:3100/bitacora/bitacora`);
  }
}
