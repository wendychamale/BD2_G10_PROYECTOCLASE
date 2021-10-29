import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig,public router: Router) {
    config.placement = 'bottom-right';
  }

  nombre = "";
  tipo = 3;
  ngOnInit() {
  }

  ngDoCheck() {
    this.inicio();
  }

  logout()
  {
    localStorage.setItem('logued', "0");
    localStorage.setItem('nombre',"");
    localStorage.setItem('apellido',"");
    localStorage.setItem('email',"");
    localStorage.setItem('id',"");
    localStorage.setItem('celular',"");
    localStorage.setItem('tipoUsuario',"");
    localStorage.setItem('libros',"");
    this.router.navigate(['login']);
  }

  inicio(){
    if(localStorage.getItem('logued') == '1')
    {
      this.nombre = localStorage.getItem('nombre');
      if(localStorage.getItem('tipoUsuario') == 'Editorial')
      {
        this.tipo = 0;
      }
      else if(localStorage.getItem('tipoUsuario') == 'Cliente')
      {
        this.tipo = 1;
      }
      else if(localStorage.getItem('tipoUsuario') == 'Administrador')
      {
        this.tipo = 2;
      }
    }
    else
    {
      this.nombre = "";
      this.tipo = 3;
    }
  }

}
