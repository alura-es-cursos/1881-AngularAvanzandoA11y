import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]',
})
export class FocusBackDirective implements OnInit, OnDestroy {
  constructor() {}

  lastFocusedElement!: Element | null;

  ngOnInit(): void {
    this.lastFocusedElement = document.activeElement;
  }

  ngOnDestroy(): void {
    if (this.lastFocusedElement) {
      (this.lastFocusedElement as HTMLElement).focus();
    }
  }
}
