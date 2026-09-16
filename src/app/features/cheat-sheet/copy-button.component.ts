import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  standalone: true,
  templateUrl: './copy-button.component.html',
  styleUrl: './copy-button.component.scss',
})
export class CopyButtonComponent {
  text = input.required<string>();
  isCopied = signal(false);

  async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.text());
      this.isCopied.set(true);
      setTimeout(() => this.isCopied.set(false), 1500);
    } catch {
      this.isCopied.set(false);
    }
  }
}
