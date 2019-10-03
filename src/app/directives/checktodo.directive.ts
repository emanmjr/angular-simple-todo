import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChecktodo]'
})
export class ChecktodoDirective {

  constructor(el:ElementRef) {
    el.nativeElement.checked == 'true';
   }

}
