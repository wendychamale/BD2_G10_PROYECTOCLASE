import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { UserService } from "../../Services/user.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../app.component.scss', './dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(public service: UserService, public router: Router) { }
  ngOnInit() {
  }


  grupo = {
    grupo: 0,
  };

  tipo: string = "";

  capturar() {

    if (this.tipo == "G9") {
      this.grupo.grupo = 9;

    } else if (this.tipo == "G10") {
      this.grupo.grupo = 10;

    } else if (this.tipo == "G11") {
      this.grupo.grupo = 11;
    } else if(this.tipo == "G12") {
      this.grupo.grupo = 12;
    }

    console.log(this.grupo);
    this.service.grupos(this.grupo)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
  }
}
