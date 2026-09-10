import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

export type FormatMode = 'prettify' | 'minify' | 'validate';

@Component({
  selector: 'app-format-controls',
  standalone: true,
  imports: [FormsModule, CapitalizePipe],
  template: `
    <div class="fmt-toolbar">
      <div class="fmt-modes">
        @for (m of modes; track m) {
          <button
            class="fmt-mode-btn"
            [class.active]="mode() === m"
            (click)="modeChange.emit(m)"
          >
            {{ m | capitalize }}
          </button>
        }
      </div>
      <div class="fmt-actions">
        @if (mode() === 'prettify') {
          <select
            class="fmt-indent-select"
            [ngModel]="indent()"
            (ngModelChange)="indentChange.emit($event)"
          >
            <option [ngValue]="2">2 spaces</option>
            <option [ngValue]="4">4 spaces</option>
          </select>
        }
        <button class="fmt-btn secondary" (click)="clear.emit()">Clear</button>
        <button class="fmt-btn primary" (click)="format.emit()">
          {{ mode() === 'validate' ? '✓ Validate' : '▶ Format' }}
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .fmt-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.67rem;
        margin-bottom: 1.11rem;
        flex-wrap: wrap;
      }
      .fmt-modes {
        display: flex;
        gap: 0.22rem;
        background: var(--bg-secondary);
        padding: 0.22rem;
        border-radius: var(--radius);
      }
      .fmt-mode-btn {
        padding: 0.39rem 1rem;
        border: none;
        background: transparent;
        color: var(--text-secondary);
        border-radius: calc(var(--radius) - 4px);
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 500;
        transition: all var(--transition);
      }
      .fmt-mode-btn:hover {
        color: var(--text-primary);
      }
      .fmt-mode-btn.active {
        background: var(--accent);
        color: white;
        box-shadow: 0 2px 12px var(--accent-glow);
      }
      .fmt-actions {
        display: flex;
        align-items: center;
        gap: 0.44rem;
      }
      .fmt-indent-select {
        padding: 0.39rem 0.67rem;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        color: var(--text-primary);
        font-size: 0.8rem;
        outline: none;
        cursor: pointer;
      }
      .fmt-indent-select:focus {
        border-color: var(--accent);
      }
      .fmt-btn {
        padding: 0.44rem 1.11rem;
        border: none;
        border-radius: var(--radius);
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: all var(--transition);
      }
      .fmt-btn.primary {
        background: var(--accent);
        color: white;
        box-shadow: 0 2px 16px var(--accent-glow);
      }
      .fmt-btn.primary:hover {
        filter: brightness(1.15);
        transform: translateY(-1px);
      }
      .fmt-btn.secondary {
        background: var(--bg-secondary);
        color: var(--text-secondary);
        border: 1px solid var(--border-color);
      }
      .fmt-btn.secondary:hover {
        color: var(--text-primary);
        border-color: var(--text-secondary);
      }
      @media (max-width: 768px) {
        .fmt-toolbar {
          flex-direction: column;
          align-items: stretch;
        }
        .fmt-actions {
          justify-content: flex-end;
        }
      }
    `,
  ],
})
export class FormatControlsComponent {
  modes: FormatMode[] = ['prettify', 'minify', 'validate'];
  mode = input.required<FormatMode>();
  indent = input.required<number>();
  modeChange = output<FormatMode>();
  indentChange = output<number>();
  format = output<void>();
  clear = output<void>();
}
