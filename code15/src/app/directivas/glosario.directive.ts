import { Directive, ElementRef, Renderer2 , HostListener} from '@angular/core';

// ElementRef libreria que permite identificar los elementos del Dom

@Directive({
  selector: '[appGlosario]'
})
export class GlosarioDirective {

  constructor(private elementRef: ElementRef, 
              private render2: Renderer2) { }
  // usamos HostListener(evento)
  @HostListener('mouseover') onOver (){
    const span = this.elementRef.nativeElement.querySelector('span');
    this.render2.addClass(span, 'activa');
  }

  @HostListener('mouseout') onOut (){
    const span = this.elementRef.nativeElement.querySelector('span');
    this.render2.removeClass(span, 'activa');
  }

}
