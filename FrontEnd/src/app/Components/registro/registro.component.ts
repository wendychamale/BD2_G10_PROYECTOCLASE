import { Component, OnInit } from '@angular/core';
import { UserService } from "../../Services/user.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor( public service: UserService, public router: Router) { }

  ngOnInit() {
  }

   texton:string="Nombres"
   textoa:string="Apellidos "
   textod:string="Celular"
   error = false;

  user = {
    nombres: '',
    apellidos:'',
    email: '',
    password: '',
    direccion: '',
    celular:'',
    tipo: '',
    aprobado:true
  };


  name: string = "";
  apellido: string = "";
  email: string = "";
  password: string = "";
  celular: string = "";
  tipo:string ="";

  capturar(){

if(this.tipo=="Editorial"){
  this.texton="Nombre Editorial";
  this.textoa="Direccion Fisica";
  this.textod="Celular";

  console.log(this.tipo);
}else{
  this.texton="Nombre ";
  this.textoa="Apellido";
  this.textod="Celular";
}

  }

  PasswordCorrecto(password: string)
  {
    const exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if(exp.test(password))
    {
      return 'Cumple con un password correcto';
    }
    return 'Debe incluir minimo 8 caracteres y maximo 15, mayuscula,minuscula,digito,caracter especial';
  }

  
  NumeroCelCorrecto(cel: string):boolean
  {
    if(cel.length == 8)
    {
      return true;
    }
    return false;
  }

  correoCorrecto(correo: string)
  {
    const exp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if(exp.test(correo))
    {
      return true;
    }
    return false;
  }




  registrar() {

    if(this.tipo=="Editorial"){
      this.user.apellidos='';
      this.user.direccion =this.apellido;
      this.user.aprobado=false;
    }else {
      this.user.direccion='';
      this.user.apellidos =this.apellido;
      this.user.aprobado=true;
    }

    this.user.nombres = this.name;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.celular = this.celular;
    this.user.tipo=this.tipo;


    if (this.name == '' || this.name == undefined|| this.email == '' || this.email == undefined||this.password == '' || this.password == undefined||this.celular == '' || this.celular == undefined||this.tipo == '' || this.tipo == undefined) {
      Swal.fire({
            text: 'No se pudo ingresar libro',
            icon: 'error',
            showConfirmButton: true,
          })
          
          this.limpiar();
  } else {
    this.service.Registro(this.user)
      .subscribe(
        res => {
          console.log(res);
          Swal.fire({
            text: this.tipo+" "+this.name+" "+ 'Ingresado correctamente',
            icon: 'success',
            showConfirmButton: true,
          })
          this.limpiar();
        },
        err =>  {  Swal.fire({
          text: 'No se pudo ingresar '+this.tipo,
          icon: 'error',
          showConfirmButton: true,
        })
  
        this.error = true;
      }
          
      )

    }
  }

  limpiar() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.tipo ='';
    this.apellido = '';
    this.celular='';
  }

}
