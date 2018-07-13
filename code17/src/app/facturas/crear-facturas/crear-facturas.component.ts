import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CifValidator } from '../../validators/cif.validator';
import { FacturasService } from '../../servicio/facturas.service';

@Component({
  selector: 'app-crear-facturas',
  templateUrl: './crear-facturas.component.html',
  styleUrls: ['./crear-facturas.component.css']
})
export class CrearFacturasComponent implements OnInit {

  formFra: FormGroup;
  fechaActual = new Date();
  factura: any;

  constructor( private facturasService : FacturasService) { }

  ngOnInit() {
    this.formFra = new FormGroup({
      cliente: new FormControl('yo', [Validators.required, Validators.minLength(4)]),
      cif: new FormControl ('', [Validators.required, CifValidator.checkCIF]),
     // cliente: new FormControl('yo'),
    //  cif: new FormControl (''),
      fecha: new FormControl('2018-07-12'),
      base: new FormControl(null),
      datosIVA: new FormGroup({
        tipo: new FormControl(0.21),
        iva: new FormControl(null)
      }),     
      total: new FormControl(null)
    });

    this.cambios();
  }

cambios(){
  this.formFra.valueChanges.subscribe(data => {
    this.formFra.get('datosIVA.iva').setValue(data.base * data.datosIVA.tipo, {emitEvent: false});
    this.formFra.get('total').setValue(this.formFra.get('base').value + this.formFra.get('datosIVA.iva').value, {emitEvent: false});
  });
}

creaFra(){
  const factura = {
    razonSocial: this.formFra.get('cliente').value,    
    cif: this.formFra.get('cif').value,
    fecha: this.formFra.get('fecha').value,
    base: this.formFra.get('base').value,  
    tipo: this.formFra.get('datosIVA.tipo').value,
    iva: this.formFra.get('datosIVA.iva').value,      
    total: this.formFra.get('total').value
  };

  this.facturasService.postFactura(factura)
                      .subscribe(
                        (resp: any) =>{
                          console.log(resp);
                        },
                        (error) =>{
                          console.log(error);
                        }
                      )
};

}
