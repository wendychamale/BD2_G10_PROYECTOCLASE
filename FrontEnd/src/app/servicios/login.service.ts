import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = 'http://3.15.230.185:3005'

  constructor(
    private http: HttpClient
    ) { }

  login(usuario)
  {
    return this.http.post<any>(`${this.api}/esb/login`,usuario);
  }
}
