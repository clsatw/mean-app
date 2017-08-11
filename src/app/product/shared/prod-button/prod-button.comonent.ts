import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{btnLabel}}</button>`
})
export class ProdButtonComponent {
  // No aliases
  @Input() btnLabel: string;
  @Output() change = new EventEmitter<any>();
}