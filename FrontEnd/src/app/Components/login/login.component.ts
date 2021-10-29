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

  email = "";
  password = "";

  user = {
    email: '',
    password: ''
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
          title: 'Registro',
          url: '/registro',
          icon: 'mdi-account-plus'
        },
        {
          title: 'Home',
          url: '/dashboard',
          icon: 'mdi-home'
        }
      ];

    }
    
  }

  verificarContrasena(contra: string) {
    if (contra != "") {
      return true
    }
    return false;
  }

  Ingresar() {
    if (this.correoCorrecto(this.email) != false && this.verificarContrasena(this.password) == true) {
      this.user.email = this.email;
      this.user.password = this.password;

      this.service.login(this.user)

        .subscribe(
          res => {
            localStorage.setItem('logued', '1');
            localStorage.setItem('nombre', res.nombres);
            localStorage.setItem('apellido', res.apellidos);
            localStorage.setItem('email', res.email);
            localStorage.setItem('id', res._id);
            localStorage.setItem('celular', res.celular);
            localStorage.setItem('tipoUsuario', res.tipo);
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
    this.email = "";
    this.password = "";
  }

  correoCorrecto(correo: string) {
    const exp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if (exp.test(correo)) {
      return true;
    }
    return false;
  }

  mostrarMenu() {
    if (localStorage.getItem('tipoUsuario') == 'Administrador') {
      Utils.indices = [
        {
          title: 'Aprobar Editorial',
          url: '/aprobar-editorial',
          icon: 'mdi-book-open-variant'
        },
        {
          title: 'Eliminar Usuarios',
          url: '/eliminarUsuarios',
          icon: 'mdi-delete-forever'
        },
        {
          title: 'Bitacora',
          url: '/bitacora',
          icon: 'mdi-book-search-outline'
        },
        {
          title: 'Estado de Ordenes',
          url: '/estado-ordenes',
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
    else if (localStorage.getItem('tipoUsuario') == 'Editorial') {
      Utils.indices = [
        {
          title: 'Crud Libros',
          url: '/crud-libro',
          icon: 'mdi-account-plus'
      },
      {
        title: 'Impuesto',
        url: '/impuesto',
        icon: 'mdi-currency-usd'
    },
    {
        title: 'Solicitudes Pendientes',
        url: '/aceptar-solicitud-libro',
        icon: 'mdi-book-open-outline'
      },
      {
        title: 'Home',
        url: '/dashboard',
        icon: 'mdi-home'
      }
      ];
      this.router.navigate(['principal']);
    }
    else if (localStorage.getItem('tipoUsuario') == 'Cliente') {
      Utils.indices = [
        {
          title: 'Catalogo',
          url: '/catalogo',
          icon: 'mdi-shopping'
        },
        {
          title: 'Carrito de Compras',
          url: '/carrito',
          icon: 'mdi-cart'
        },
        {
          title: 'Solicitudes',
          url: '/solicitud-libro',
          icon: 'mdi-book-open-page-variant'
        },
        {
          title: 'Ordenes',
          url: '/ordenes-clientes',
          icon: 'mdi-note-multiple-outline'
        },
        {
          title: 'Home',
          url: '/dashboard',
          icon: 'mdi-home'
        }
      ];
      this.router.navigate(['catalogo']);
    }
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


}
