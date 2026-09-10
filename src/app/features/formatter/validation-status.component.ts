import { Component, input } from '@angular/core';

@Component({
  selector: 'app-validation-status',
  standalone: true,
  template: `
    @if (error()) {
      <div class="fmt-error-display">
        <span class="fmt-error-icon">✕</span>
        <p>{{ error() }}</p>
      </div>
    } @else if (isValid()) {
      <div class="fmt-success-display">
        <span class="fmt-success-icon">✓</span>
        <p>Valid JSON</p>
      </div>
    }
  `,
  styles: [
    `
      .fmt-error-display,
      .fmt-success-display {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 32px;
        text-align: center;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        height: 100%;
      }
      .fmt-error-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(248, 113, 113, 0.12);
        color: var(--error);
        font-size: 1.4rem;
        font-weight: 700;
      }
      .fmt-error-display p {
        color: var(--error);
        font-size: 0.9rem;
        max-width: 300px;
        word-break: break-word;
      }
      .fmt-success-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(74, 222, 128, 0.12);
        color: var(--success);
        font-size: 1.4rem;
        font-weight: 700;
      }
      .fmt-success-display p {
        color: var(--success);
        font-size: 1rem;
        font-weight: 600;
      }
    `,
  ],
})
export class ValidationStatusComponent {
  error = input<string | null>(null);
  isValid = input(false);
}
