import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[prodHighlight]' })
export class ProdHighlightDirective implements OnChanges {

  // Aliased because `color` is a better property name than `heroHighlight`
  @Input('prodHighlight') color: string;

  constructor(private el: ElementRef) {}
  /* Respond when Angular (re)sets data-bound input properties.
  ** The method receives a SimpleChanges object of current and previous property values.
  ** Called before ngOnInit() and whenever one or more data-bound input properties change.  
  */
  ngOnChanges() {
    this.el.nativeElement.style.color = this.color || 'yellow';
  }
}