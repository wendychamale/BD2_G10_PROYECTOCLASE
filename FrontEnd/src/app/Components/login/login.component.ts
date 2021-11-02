import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service'
import { Utils } from '../../Utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public service: LoginService, public router: Router) { }

  carnet = "";
  contrasena = "";

  user = {
    carnet: '',
    contrasena: ''
  };

  ngOnInit() {
    this.logout();
    if(localStorage.getItem('logued') == "0"){
      Utils.indices = [
        {
          title: 'Login',
          url: '/login',
          icon: 'mdi-account-circle'
        },
        {
          title: 'Home',
          url: '/dashboard',
          icon: 'mdi-home'
        }
      ];

    }
    
  }


  Ingresar() {
    if (this.carnet != "" && this.contrasena != "") {
      this.user.carnet = this.carnet;
      this.user.contrasena = this.contrasena;

      this.service.login(this.user)

        .subscribe(
          res => {
            localStorage.setItem('logued', '1');
            localStorage.setItem('carnet', res.carnet);
            localStorage.setItem('contrasena', res.contrasena);
            this.mostrarMenu();
          },
          err => {
            Swal.fire({
              text: 'Verificar datos ingresados',
              icon: 'error',
              showConfirmButton: true,
            })
          }
        )
    }
    else {
      Swal.fire({
        text: 'Verificar datos ingresados',
        icon: 'error',
        showConfirmButton: true,
      })
    }
    this.limpiarDatos();

  }

  limpiarDatos() {
    this.contrasena = "";
    this.carnet = "";
  }



  mostrarMenu() {
      Utils.indices = [
        
        {
          title: 'Tabla Ranking',
          url: '/tabla-ranking',
          icon: 'mdi-book-search-outline'
        },
        {
          title: 'Grafico-Ranking',
          url: '/grafico-ranking',
          icon: 'mdi-note-multiple-outline'
        },
        
        {
          title: 'Home',
          url: '/dashboard',
          icon: 'mdi-home'
        }
      ];
      this.router.navigate(['principal']);
    
    
  
  }

  logout()
  {
    localStorage.setItem('logued', "0");
    localStorage.setItem('carnet',"");
    localStorage.setItem('contrasena',"");
    this.router.navigate(['login']);
  }


}
