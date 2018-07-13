import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  url = environment.urlFactura;

  constructor( private http: HttpClient) { }

  postFactura(factura){
    return this.http.post(this.url, factura)
                    .pipe( //angular 6
                      map(( resp: any) => {
                        return resp;
                      })
                    )
  }
}
