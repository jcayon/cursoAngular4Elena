import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivaif',
  templateUrl: './directivaif.component.html',
  styleUrls: ['./directivaif.component.css']
})
export class DirectivaifComponent implements OnInit {

  repositorio = 'code14';
  repositorioCheck: string;
  capital: string;

  constructor() { }

  ngOnInit() {
  }

  setResultado(){
    return this.capital.toLowerCase() === 'santander' ? true : false;
  }

}
