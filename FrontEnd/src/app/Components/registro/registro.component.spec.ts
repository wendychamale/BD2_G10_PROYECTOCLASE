import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'
import { RegistroComponent } from './registro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  


  describe('Prueba Registro', () => {

    it('Verifica que se envien bien los datos', function () {
      const user = {
        nombres: 'prueba',
        apellidos:'prueba',
        email: 'prueba@gmail.com',
        password: 'Prueb@123',
        direccion: 'zona 15 ',
        celular:'12345678',
        tipo: 'Cliente',
        aprobado:true
      };
      var s = new RegistroComponent(component.service, component.router);
      component.user=user;
      component.registrar;
      expect(component.error).toBeFalsy();

    });

  });

  describe('Prueba Celular Correcto', () => {
    it('Comprobacion de CEL correcto', function () {
      expect(component.NumeroCelCorrecto('12345678')).toBeTruthy();
    });

    it('Comprobacion de Cel incorrecto', function () {
      expect(component.NumeroCelCorrecto('123456789102')).toBeFalsy();
    });

  });

  describe('Prueba Para password', () => {
    it('Comprobacion de password correcto', function () {
      expect(component.PasswordCorrecto('eJemplo2!')).toContain('Cumple con un password correcto');
    });

    it('Comprobacion de username no correcto', function () {
      expect(component.PasswordCorrecto('incorrectop')).toContain('Debe incluir minimo 8 caracteres y maximo 15, mayuscula,minuscula,digito,caracter especial');
    });
  });

  describe('Prueba para correo ', () => {
    it('Comprobacion de correo correcto', function () {
      expect(component.correoCorrecto('usuario@gmail.com')).toBeTruthy();
    });

    it('Comprobacion de correo incorrecto', function () {
      expect(component.correoCorrecto('usuario.com')).toBeFalsy();
    });

    it('Comprobacion de correo incorrecto', function () {
      expect(component.correoCorrecto('usuario@gmailcom')).toBeFalsy();
    });

    it('Comprobacion de correo incorrecto', function () {
      expect(component.correoCorrecto('')).toBeFalsy();
    });

  });

 

});
