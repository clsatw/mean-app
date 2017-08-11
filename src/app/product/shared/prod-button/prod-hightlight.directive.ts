import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[prodHighlight]' })
export class ProdHighlightDirective implements OnChanges {

  // Aliased because `color` is a better property name than `heroHighlight`
  @Input('prodHighlight') color: string;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.color = this.color || 'yellow';
  }
}