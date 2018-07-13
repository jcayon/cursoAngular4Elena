import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  formCLiente: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formCLiente = new FormGroup({
      nombre: new FormControl('', Validators.required),
      ciudad: new FormControl('')
    })
  }

}
