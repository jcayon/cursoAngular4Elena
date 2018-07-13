import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  //podemos escribri un trocito de html
  template: `<p>&cop;Santander todos los derechos 2018`,
  styles: [ 'p {color: violet}']
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
