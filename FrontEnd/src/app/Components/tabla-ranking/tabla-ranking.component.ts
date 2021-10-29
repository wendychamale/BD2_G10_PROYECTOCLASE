import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroService } from 'src/app/Services/libro.service';

@Component({
  selector: 'app-tabla-ranking',
  templateUrl: './tabla-ranking.component.html',
  styleUrls: ['./tabla-ranking.component.scss']
})
export class TablaRankingComponent implements OnInit {

  constructor(public service: LibroService, public router: Router) { }

  ngOnInit() {
    this.getData();
  }
  libros:any = [];  

  
 getData() {
  this.libros = [];
 this.service.getbitacora()
    .subscribe(
      res => {
        console.log(res);
         this.libros=res;
        console.log(this.libros + "Get Bitacora");
      }, err =>  {  console.log("Error mostrar libros Bitacora")})
}

}
