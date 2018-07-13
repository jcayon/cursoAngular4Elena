import { Injectable } from '@angular/core';
import { Observer, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  getMensajes(): Observable<string> {
    const mensajes = Observable.create((observer: Observer<string> ) => {
      setTimeout(() => {
        observer.next('Primer mensje');
      }, 1000);
      setTimeout(() => {
        observer.next('Segungo mensje');
      }, 2000);
      setTimeout(() => {
        observer.error('Error');
      }, 3000);
      setTimeout(() => {
        observer.next('tercer mensje');
      }, 4000);
      
    })
    return mensajes;
  }

  getPins(): Observable<any> {
    const mensajes = Observable.create((observer: Observer<string> ) => { 
      setInterval(()=>{
        observer.next('Ping');
      }, 1000)
    });
    return mensajes;
  }
}
