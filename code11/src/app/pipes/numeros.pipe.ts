import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeros'
})
export class NumerosPipe implements PipeTransform {

  transform(value: any, decimales: any, moneda?: string): any {
    let redondeo;
    let factor = Math.pow(10, decimales);
    if(value < 0 ){
      redondeo = Math.round(-value* factor) /factor;
    } else {
      redondeo = Math.round(value* factor) /factor;
    }

    // con esto ponemos los puntos de los miles en español 
    let formateado = new Intl.NumberFormat('es-Es', {minimumFractionDigits: decimales}).format(redondeo);
    return formateado + (moneda ? '' + moneda : '');
  }

}
