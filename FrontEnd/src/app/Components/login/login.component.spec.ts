import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*describe('Prueba Correo Para Login ', () => {
    it('Correo Correcto', function () {
      expect(component.correoCorrecto('ejemplo@gmail.com')).toBeTruthy();
    });

    it('Correo Incorrecto', function () {
      expect(component.correoCorrecto('ejemplogmail.com')).toBeFalsy();
    });

  });

  describe('Verificar campo lleno contrasena ', () => {
    it('Campo contrasena lleno', function () {
      expect(component.verificarContrasena('00000')).toBeTruthy();
    });

    it('Campo contrasena vacio', function () {
      expect(component.verificarContrasena('')).toBeFalsy();
    });

  });*/

});
