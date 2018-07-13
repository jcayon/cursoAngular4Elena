import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from  '@angular/forms';

import { CrearClienteComponent } from './crear-cliente.component';

//el texto del describe es el texto general
//describe('CrearClienteComponent', () => {  // por defecto aparece lo anterior
describe('text general apra crear cliente', () => {
  let component: CrearClienteComponent;
  let fixture: ComponentFixture<CrearClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       // esto es puesto por nosotros por usar formularios
      imports: [ ReactiveFormsModule ],
      // .......................................
      declarations: [ CrearClienteComponent ]
     
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => { // aparecee sto po defecto
  it('creacion del componente', () => {
    expect(component).toBeTruthy();
  });

  // estos los generamso ya nosotros
  // it ( textodescriotivodelcaso, funcionFLecha)
  it('inclusion nombre', () => {
    expect(component.formCLiente.contains('nombre')).toBeTruthy();
    expect(component.formCLiente.contains('ciudad')).toBeTruthy();

  });

  it('campo nombre obligatorio', () => {
    const control = component.formCLiente.get('nombre');
    control.setValue('');
    expect(control.valid).toBeFalsy;
   

  });

  // para lanzarlo es dentro del proyecto en el cmd, con el comando:
  // ng test 
  //poniendolo todos los archivos unitarios en marcha
  // por defecto aparecen 3 mal que son los test de por defecto del app.componet

  //otra vision
  //ng test --code-coverage 
  // entramos en C:\Users\angular\Documents\cursoAngularElena\code19\coverage
  // y ejecutamos el index.html

});
