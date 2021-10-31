import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-tabla-ranking',
  templateUrl: './tabla-ranking.component.html',
  styleUrls: ['./tabla-ranking.component.scss']
})
export class TablaRankingComponent implements OnInit {

  constructor(public service: ConsultasService, public router: Router) { }

  ngOnInit() {
    this.getData();
  }
  libros:any = [
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "08",
        "anio": "2020",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "08",
        "anio": "2020",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "08",
        "anio": "2020",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "08",
        "anio": "2020",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "08",
        "anio": "2020",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "08",
        "anio": "2020",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "08",
        "anio": "2020",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "08",
        "anio": "2020",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "08",
        "anio": "2020",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "08",
        "anio": "2020",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "08",
        "anio": "2020",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "08",
        "anio": "2020",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "08",
        "anio": "2020",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "08",
        "anio": "2020",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "08",
        "anio": "2020",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "08",
        "anio": "2020",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "09",
        "anio": "2020",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "09",
        "anio": "2020",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "09",
        "anio": "2020",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "09",
        "anio": "2020",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "09",
        "anio": "2020",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "09",
        "anio": "2020",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "09",
        "anio": "2020",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "09",
        "anio": "2020",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "09",
        "anio": "2020",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "09",
        "anio": "2020",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "09",
        "anio": "2020",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "09",
        "anio": "2020",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "09",
        "anio": "2020",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "09",
        "anio": "2020",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "09",
        "anio": "2020",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "09",
        "anio": "2020",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "10",
        "anio": "2020",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "10",
        "anio": "2020",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "10",
        "anio": "2020",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "10",
        "anio": "2020",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "10",
        "anio": "2020",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "10",
        "anio": "2020",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "10",
        "anio": "2020",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "10",
        "anio": "2020",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "10",
        "anio": "2020",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "10",
        "anio": "2020",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "10",
        "anio": "2020",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "10",
        "anio": "2020",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "10",
        "anio": "2020",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "10",
        "anio": "2020",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "10",
        "anio": "2020",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "10",
        "anio": "2020",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "11",
        "anio": "2020",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "11",
        "anio": "2020",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "11",
        "anio": "2020",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "11",
        "anio": "2020",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "11",
        "anio": "2020",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "11",
        "anio": "2020",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "11",
        "anio": "2020",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "11",
        "anio": "2020",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "11",
        "anio": "2020",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "11",
        "anio": "2020",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "11",
        "anio": "2020",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "11",
        "anio": "2020",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "11",
        "anio": "2020",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "11",
        "anio": "2020",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "11",
        "anio": "2020",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "11",
        "anio": "2020",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "12",
        "anio": "2020",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "12",
        "anio": "2020",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "12",
        "anio": "2020",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "12",
        "anio": "2020",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "12",
        "anio": "2020",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "12",
        "anio": "2020",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "12",
        "anio": "2020",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "12",
        "anio": "2020",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "12",
        "anio": "2020",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "12",
        "anio": "2020",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "12",
        "anio": "2020",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "12",
        "anio": "2020",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "12",
        "anio": "2020",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "12",
        "anio": "2020",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "12",
        "anio": "2020",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "12",
        "anio": "2020",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "01",
        "anio": "2021",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "01",
        "anio": "2021",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "01",
        "anio": "2021",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "01",
        "anio": "2021",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "01",
        "anio": "2021",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "01",
        "anio": "2021",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "01",
        "anio": "2021",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "01",
        "anio": "2021",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "01",
        "anio": "2021",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "01",
        "anio": "2021",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "01",
        "anio": "2021",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "01",
        "anio": "2021",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "01",
        "anio": "2021",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "01",
        "anio": "2021",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "01",
        "anio": "2021",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "01",
        "anio": "2021",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "02",
        "anio": "2021",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "02",
        "anio": "2021",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "02",
        "anio": "2021",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "02",
        "anio": "2021",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "02",
        "anio": "2021",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "02",
        "anio": "2021",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "02",
        "anio": "2021",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "02",
        "anio": "2021",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "02",
        "anio": "2021",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "02",
        "anio": "2021",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "02",
        "anio": "2021",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "02",
        "anio": "2021",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "02",
        "anio": "2021",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "02",
        "anio": "2021",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "02",
        "anio": "2021",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "02",
        "anio": "2021",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "03",
        "anio": "2021",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "03",
        "anio": "2021",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "03",
        "anio": "2021",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "03",
        "anio": "2021",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "03",
        "anio": "2021",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "03",
        "anio": "2021",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "03",
        "anio": "2021",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "03",
        "anio": "2021",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "03",
        "anio": "2021",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "03",
        "anio": "2021",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "03",
        "anio": "2021",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "03",
        "anio": "2021",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "03",
        "anio": "2021",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "03",
        "anio": "2021",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "03",
        "anio": "2021",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "03",
        "anio": "2021",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "04",
        "anio": "2021",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "04",
        "anio": "2021",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "04",
        "anio": "2021",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "04",
        "anio": "2021",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "04",
        "anio": "2021",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "04",
        "anio": "2021",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "04",
        "anio": "2021",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "04",
        "anio": "2021",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "04",
        "anio": "2021",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "04",
        "anio": "2021",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "04",
        "anio": "2021",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "04",
        "anio": "2021",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "04",
        "anio": "2021",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "04",
        "anio": "2021",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "04",
        "anio": "2021",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "04",
        "anio": "2021",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "05",
        "anio": "2021",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "05",
        "anio": "2021",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "05",
        "anio": "2021",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "05",
        "anio": "2021",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "05",
        "anio": "2021",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "05",
        "anio": "2021",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "05",
        "anio": "2021",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "05",
        "anio": "2021",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "05",
        "anio": "2021",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "05",
        "anio": "2021",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "05",
        "anio": "2021",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "05",
        "anio": "2021",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "05",
        "anio": "2021",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "05",
        "anio": "2021",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "05",
        "anio": "2021",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "05",
        "anio": "2021",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "06",
        "anio": "2021",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "06",
        "anio": "2021",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "06",
        "anio": "2021",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "06",
        "anio": "2021",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "06",
        "anio": "2021",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "06",
        "anio": "2021",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "06",
        "anio": "2021",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "06",
        "anio": "2021",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "06",
        "anio": "2021",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "06",
        "anio": "2021",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "06",
        "anio": "2021",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "06",
        "anio": "2021",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "06",
        "anio": "2021",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "06",
        "anio": "2021",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "06",
        "anio": "2021",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "06",
        "anio": "2021",
        "posicion": 16
    },
    {
        "nombre": "INDUSTRIAL, S.A",
        "valorActivo": 106787577000,
        "mes": "07",
        "anio": "2021",
        "posicion": 1
    },
    {
        "nombre": "DE DESARROLLO RURAL, S.A",
        "valorActivo": 83741783000,
        "mes": "07",
        "anio": "2021",
        "posicion": 2
    },
    {
        "nombre": "G&T CONTINENTAL, S. A.",
        "valorActivo": 55939767000,
        "mes": "07",
        "anio": "2021",
        "posicion": 3
    },
    {
        "nombre": "DE AMÉRICA CENTRAL, S. A.",
        "valorActivo": 33914821000,
        "mes": "07",
        "anio": "2021",
        "posicion": 4
    },
    {
        "nombre": "AGROMERCANTIL DE GUATEMALA, S. A.",
        "valorActivo": 32026580000,
        "mes": "07",
        "anio": "2021",
        "posicion": 5
    },
    {
        "nombre": "DE LOS TRABAJADORES",
        "valorActivo": 29184911000,
        "mes": "07",
        "anio": "2021",
        "posicion": 6
    },
    {
        "nombre": "PROMERICA, S. A.",
        "valorActivo": 17095036000,
        "mes": "07",
        "anio": "2021",
        "posicion": 7
    },
    {
        "nombre": "INTERNACIONAL, S.A",
        "valorActivo": 10795303000,
        "mes": "07",
        "anio": "2021",
        "posicion": 8
    },
    {
        "nombre": "EL CREDITO HIPOTECARIO NACIONAL DE GUATEMALA",
        "valorActivo": 5150878000,
        "mes": "07",
        "anio": "2021",
        "posicion": 9
    },
    {
        "nombre": "CITIBANK, N.A., SUCURSAL GUATEMALA",
        "valorActivo": 4110371000,
        "mes": "07",
        "anio": "2021",
        "posicion": 10
    },
    {
        "nombre": "FICOHSA GUATEMALA, S. A.",
        "valorActivo": 2796938000,
        "mes": "07",
        "anio": "2021",
        "posicion": 11
    },
    {
        "nombre": "AZTECA DE GUATEMALA, S. A.",
        "valorActivo": 1914408000,
        "mes": "07",
        "anio": "2021",
        "posicion": 12
    },
    {
        "nombre": "INMOBILIARIO, S.A",
        "valorActivo": 1894307000,
        "mes": "07",
        "anio": "2021",
        "posicion": 13
    },
    {
        "nombre": "DE ANTIGUA, S. A.",
        "valorActivo": 1459073000,
        "mes": "07",
        "anio": "2021",
        "posicion": 14
    },
    {
        "nombre": "INV, S. A.",
        "valorActivo": 948356000,
        "mes": "07",
        "anio": "2021",
        "posicion": 15
    },
    {
        "nombre": "VIVIBANCO, S. A.",
        "valorActivo": 774077000,
        "mes": "07",
        "anio": "2021",
        "posicion": 16
    }
];  

tabla_ranking:any = [ ];
 getData() {

this.service.getTablaRanking()
    .subscribe(
     res => {
       console.log(res);
        this.libros=res;
       

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

  console.log(this.tabla_ranking);
     }, err =>  {  console.log("Error mostrar libros Bitacora")})

     
}

}
