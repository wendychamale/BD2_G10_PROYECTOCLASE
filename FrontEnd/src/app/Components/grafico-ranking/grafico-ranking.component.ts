import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-grafico-ranking',
  templateUrl: './grafico-ranking.component.html',
  styleUrls: ['./grafico-ranking.component.scss']
})
export class GraficoRankingComponent implements OnInit {

  constructor(public service: ConsultasService, public router: Router) { }

  ngOnInit() {
    this.getData();
  }
  libros:any = [];  
  public  tabla_ranking:any = [];
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio'];
  public lineChartColors: Color[] = [
    {borderColor: 'rgba(148,159,177,1)' ,backgroundColor: '#fff' },
    {borderColor: 'red',backgroundColor: '#fff'},
    {borderColor: 'rgba(3, 83, 169)' ,backgroundColor: '#fff'},
    {borderColor: 'rgba(12, 12, 12 )',backgroundColor: '#fff'},
    {borderColor: 'rgba(20, 41, 40)',backgroundColor: '#fff'},
    {borderColor: 'rgba(144, 12, 63 )',backgroundColor: '#fff'},
    {borderColor: 'rgba(255, 87, 51',backgroundColor: '#fff'},
    {borderColor: 'rgba(243, 15, 94 )',backgroundColor: '#fff'},
    {borderColor:'rgba(15, 243, 236 )',backgroundColor: '#fff'},
    {borderColor: 'rgba(213, 71, 247 )',backgroundColor: '#fff'}, 
    {borderColor: 'rgba(249, 139, 107 )',backgroundColor: '#fff'},
    {borderColor: 'rgba(38, 247, 5 )',backgroundColor: '#fff'}
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  

 getData() {
 // this.tabla_ranking = this.libros;


  console.log(this.tabla_ranking);

 this.service.getTablaRanking()
    .subscribe(
     res => {
       console.log(res);
        this.libros=res;
        console.log(this.libros + "Get tabla-ranking");
        
for (let i = 0; i < this.libros.length; i++) {
    var encontrado=false;
    
    for (let j = 0; j < this.tabla_ranking.length; j++) {
     // console.log(this.tabla_ranking[j].nombre+"--"+ this.libros[i].nombre);
      if (this.libros[i].nombre == this.tabla_ranking[j].nombre) {
         encontrado=true;
      if(this.libros[i].mes=='08' && this.libros[i].anio=='2020'){
          this.tabla_ranking[j].agosto=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='09' && this.libros[i].anio=='2020'){
          this.tabla_ranking[j].septiembre=this.libros[i].posicion;
          }
  
      else  if(this.libros[i].mes=='10' && this.libros[i].anio=='2020'){
          this.tabla_ranking[j].octubre=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='11' && this.libros[i].anio=='2020'){
          this.tabla_ranking[j].noviembre=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='12' && this.libros[i].anio=='2020'){
          this.tabla_ranking[j].diciembre=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='01' && this.libros[i].anio=='2021'){
          this.tabla_ranking[j].enero=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='02' && this.libros[i].anio=='2021'){
          this.tabla_ranking[j].febrero=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='03' && this.libros[i].anio=='2021'){
          this.tabla_ranking[j].marzo=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='04' && this.libros[i].anio=='2021'){
          this.tabla_ranking[j].abril=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='05' && this.libros[i].anio=='2021'){
          this.tabla_ranking[j].mayo=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='06' && this.libros[i].anio=='2021'){
          this.tabla_ranking[j].junio=this.libros[i].posicion;
          }
      else  if(this.libros[i].mes=='07' && this.libros[i].anio=='2021'){
          this.tabla_ranking[j].julio=this.libros[i].posicion;
          }
      break;
      }
     
  
    }
  
    
    if(encontrado==false){
  
      if(this.libros[i].mes=='08' && this.libros[i].anio=='2020'){
          this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:this.libros[i].posicion, septiembre:"",octubre:"",noviembre:"",diciembre:"",enero:"",febrero:"",marzo:"",abril:"",mayo:"",junio:"",julio:""});
         }
     else  if(this.libros[i].mes=='09' && this.libros[i].anio=='2020'){
         this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:this.libros[i].posicion,octubre:"",noviembre:"",diciembre:"",enero:"",febrero:"",marzo:"",abril:"",mayo:"",junio:"",julio:""});
         }
  
     else  if(this.libros[i].mes=='10' && this.libros[i].anio=='2020'){
          this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:this.libros[i].posicion,noviembre:"",diciembre:"",enero:"",febrero:"",marzo:"",abril:"",mayo:"",junio:"",julio:""});
         }
     else  if(this.libros[i].mes=='11' && this.libros[i].anio=='2020'){
         this.tabla_ranking[i].noviembre=this.libros[i].posicion;
          this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:"",noviembre:this.libros[i].posicion,diciembre:"",enero:"",febrero:"",marzo:"",abril:"",mayo:"",junio:"",julio:""});
         }
     else  if(this.libros[i].mes=='12' && this.libros[i].anio=='2020'){
           this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:"",noviembre:"",diciembre:this.libros[i].posicion,enero:"",febrero:"",marzo:"",abril:"",mayo:"",junio:"",julio:""});
         }
     else  if(this.libros[i].mes=='01' && this.libros[i].anio=='2021'){
          this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:"",noviembre:"",diciembre:"",enero:this.libros[i].posicion,febrero:"",marzo:"",abril:"",mayo:"",junio:"",julio:""});
         }
     else  if(this.libros[i].mes=='02' && this.libros[i].anio=='2021'){
           this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:"",noviembre:"",diciembre:"",enero:"",febrero:this.libros[i].posicion,marzo:"",abril:"",mayo:"",junio:"",julio:""});
         }
     else  if(this.libros[i].mes=='03' && this.libros[i].anio=='2021'){
          this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:"",noviembre:"",diciembre:"",enero:"",febrero:"",marzo:this.libros[i].posicion,abril:"",mayo:"",junio:"",julio:""});
         }
     else  if(this.libros[i].mes=='04' && this.libros[i].anio=='2021'){
          this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:"",noviembre:"",diciembre:"",enero:"",febrero:"",marzo:"",abril:this.libros[i].posicion,mayo:"",junio:"",julio:""});
          }
     else  if(this.libros[i].mes=='05' && this.libros[i].anio=='2021'){
           this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:"",noviembre:"",diciembre:"",enero:"",febrero:"",marzo:"",abril:"",mayo:this.libros[i].posicion,junio:"",julio:""});
         }
     else  if(this.libros[i].mes=='06' && this.libros[i].anio=='2021'){
          this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:"",noviembre:"",diciembre:"",enero:"",febrero:"",marzo:"",abril:"",mayo:"",junio:this.libros[i].posicion,julio:""});
         }
     else  if(this.libros[i].mes=='07' && this.libros[i].anio=='2021'){
          this.tabla_ranking.push({nombre: this.libros[i].nombre, valorActivo:this.libros[i].valorActivo,agosto:"", septiembre:"",octubre:"",noviembre:"",diciembre:"",enero:"",febrero:"",marzo:"",abril:"",mayo:"",junio:"",julio:this.libros[i].posicion});
         }
         }
  
  }
  
  for (let k = 0; k < this.tabla_ranking.length; k++) {
      console.log(this.tabla_ranking[k].nombre+"--");
  this.lineChartData.push( { data: [this.tabla_ranking[k].agosto, this.tabla_ranking[k].septiembre,this.tabla_ranking[k].octubre,this.tabla_ranking[k].noviembre,this.tabla_ranking[k].diciembre,this.tabla_ranking[k].enero,this.tabla_ranking[k].febrero,this.tabla_ranking[k].marzo,this.tabla_ranking[k].abril,this.tabla_ranking[k].mayo,this.tabla_ranking[k].junio,this.tabla_ranking[k].julio], label: this.tabla_ranking[k].nombre });
      
    }
      }, err =>  {  console.log("Error mostrar bancos")})

     
}
  
}
