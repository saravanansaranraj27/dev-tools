import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  standalone: true,
  template: `
    <button
      class="cs-copy-btn"
      [class.copied]="isCopied()"
      (click)="copy()"
      [attr.aria-label]="isCopied() ? 'Copied' : 'Copy to clipboard'"
      [title]="isCopied() ? 'Copied!' : 'Click to copy'"
    >
      @if (isCopied()) {
        <!-- Checkmark Icon -->
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      } @else {
        <!-- Clipboard Copy Icon (same style as nav icons) -->
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      }
    </button>
  `,
  styles: [
    `
      .cs-copy-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        cursor: pointer;
        padding: 6px;
        border-radius: 4px;
        transition: all var(--transition);
        color: var(--icon-color);
        opacity: 0.6;
      }
      .cs-copy-btn:hover {
        opacity: 1;
        color: var(--accent);
        background: var(--accent-glow);
      }
      .cs-copy-btn.copied {
        opacity: 1;
        color: var(--success);
      }
      .cs-copy-btn svg {
        width: 16px;
        height: 16px;
      }
    `,
  ],
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
