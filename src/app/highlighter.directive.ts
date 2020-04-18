import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elem:ElementRef) { }
  @HostListener("click") onClicks(){
    this.textDeco("aqua")
    }
  
    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("transparent")
    }
  
  
    private textDeco(action:string){
      this.elem.nativeElement.style.backgroundColor=action;
  
    }
  
}
