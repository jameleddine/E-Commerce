import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private el : ElementRef , private re:Renderer2) {
    console.log(this.el.nativeElement)
    this.re.setStyle(this.el.nativeElement,'font-size','18px')
   }

}
