import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appFocusTrap]',
})
export class FocusTrapDirective implements AfterContentInit {
  private firstFocusableElement!: HTMLElement;
  private lastFocusableElement!: HTMLElement;
  constructor(private elementRef: ElementRef<any>) {}

  ngAfterContentInit(): void {
    const focusableElements = this.elementRef.nativeElement.querySelectorAll(`
      [tabindex]:not([tabindex="-1"]),
      a[href]:not([disabled]),
      button:not([disabled]),
      textarea:not([disabled]),
      input:not([disabled]),
      select:not([disabled])
  `);
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];
    this.firstFocusableElement.focus();
  }

  @HostListener('keydown', ['$event'])
  manageTabKey(event: KeyboardEvent): void {
    const { key, shiftKey } = event;
    if (key !== 'Tab') return;

    if (shiftKey && document.activeElement === this.firstFocusableElement) {
      this.lastFocusableElement.focus();
      event.preventDefault();
    } else if (
      !shiftKey &&
      document.activeElement === this.lastFocusableElement
    ) {
      this.firstFocusableElement.focus();
      event.preventDefault();
    }
  }
}
