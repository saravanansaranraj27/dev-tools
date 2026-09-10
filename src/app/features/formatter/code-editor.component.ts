import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  template: `
    <div class="fmt-panel" [class.panel-error]="hasError()">
      <div class="fmt-panel-header">
        <span class="fmt-panel-label">
          @if (readOnly()) {
            <svg
              class="fmt-panel-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          } @else {
            <svg
              class="fmt-panel-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
              />
              <path
                d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
              />
            </svg>
          }
          {{ label() }}
        </span>
        <span class="fmt-panel-meta">
          @if (charCount() !== undefined) {
            <span>{{ charCount() }} chars</span>
          }
          @if (readOnly() && value() && !hasError()) {
            <button
              class="fmt-copy-btn"
              [class.copied]="isCopied()"
              (click)="copyOutput()"
            >
              @if (isCopied()) {
                <svg
                  class="fmt-copy-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copied</span>
              } @else {
                <svg
                  class="fmt-copy-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path
                    d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                  />
                </svg>
                <span>Copy</span>
              }
            </button>
          }
        </span>
      </div>
      <textarea
        class="fmt-textarea"
        [class.has-error]="hasError()"
        [class.output]="readOnly()"
        [value]="value()"
        [readOnly]="readOnly()"
        [placeholder]="
          readOnly() ? 'Output will appear here...' : 'Paste your JSON here...'
        "
        spellcheck="false"
        (input)="onInput($event)"
      ></textarea>
    </div>
  `,
  styles: [
    `
      .fmt-panel {
        display: flex;
        flex-direction: column;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        overflow: hidden;
        transition: border-color var(--transition);
        flex: 1;
      }
      .fmt-panel:focus-within {
        border-color: var(--accent);
        box-shadow: 0 0 0 3px var(--accent-glow);
      }
      .fmt-panel.panel-error {
        border-color: var(--error);
      }
      .fmt-panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.56rem 0.89rem;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: var(--panel-header-color);
        background: var(--bg-tertiary);
        border-bottom: 1px solid var(--border-color);
      }
      .fmt-panel-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fmt-panel-icon {
        width: 14px;
        height: 14px;
        color: var(--icon-color);
        flex-shrink: 0;
      }
      .fmt-panel-meta {
        display: flex;
        align-items: center;
        gap: 0.67rem;
      }
      .fmt-copy-btn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: none;
        border: none;
        color: var(--accent);
        font-size: 0.78rem;
        cursor: pointer;
        padding: 0.22rem 0.56rem;
        border-radius: 4px;
        transition: all var(--transition);
        line-height: 1;
      }
      .fmt-copy-btn:hover {
        background: var(--accent-glow);
      }
      .fmt-copy-btn.copied {
        color: var(--success);
      }
      .fmt-copy-icon {
        width: 14px;
        height: 14px;
        min-width: 14px;
        flex-shrink: 0;
        display: block;
      }
      .fmt-textarea {
        flex: 1;
        width: 100%;
        padding: 0.89rem;
        background: transparent;
        border: none;
        color: var(--text-primary);
        font-family: var(--font-mono);
        font-size: 0.78rem;
        line-height: 1.7;
        resize: none;
        outline: none;
        tab-size: 2;
      }
      .fmt-textarea::placeholder {
        color: var(--text-secondary);
        opacity: 0.5;
      }
      .fmt-textarea.has-error {
        color: var(--error);
      }
      .fmt-textarea.output {
        color: var(--success);
      }
    `,
  ],
})
export class CodeEditorComponent {
  label = input.required<string>();
  value = input('');
  readOnly = input(false);
  hasError = input(false);
  charCount = input<number | undefined>(undefined);
  valueChange = output<string>();

  isCopied = signal(false);

  onInput(event: Event): void {
    if (!this.readOnly()) {
      this.valueChange.emit((event.target as HTMLTextAreaElement).value);
    }
  }

  async copyOutput(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.value());
      this.isCopied.set(true);
      setTimeout(() => this.isCopied.set(false), 1500);
    } catch {}
  }
}
