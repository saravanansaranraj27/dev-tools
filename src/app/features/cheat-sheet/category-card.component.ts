import { Component, input } from '@angular/core';
import { CopyButtonComponent } from './copy-button.component';
import type { Command } from '../../data/cheat-sheet.data';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CopyButtonComponent],
  template: `
    <div class="cs-card">
      <div class="cs-card-header">
        <h3 class="cs-card-name">{{ command().name }}</h3>
        <p class="cs-card-desc">{{ command().desc }}</p>
      </div>
      <div class="cs-cmd-block">
        <code>{{ command().cmd }}</code>
        <app-copy-button [text]="command().cmd" />
      </div>
    </div>
  `,
  styles: [
    `
      .cs-card {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        padding: 18px;
        transition: all var(--transition);
      }
      .cs-card:hover {
        border-color: var(--accent);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      }
      .cs-card-name {
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 4px;
      }
      .cs-card-desc {
        font-size: 0.8rem;
        color: var(--text-secondary);
        line-height: 1.4;
      }
      .cs-cmd-block {
        margin-top: 14px;
        padding: 10px 14px;
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: calc(var(--radius) - 4px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        transition: all var(--transition);
      }
      .cs-cmd-block:hover {
        border-color: var(--accent);
        background: var(--bg-tertiary);
      }
      .cs-cmd-block code {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        color: var(--accent);
        word-break: break-all;
        flex: 1;
      }
    `,
  ],
})
export class CategoryCardComponent {
  command = input.required<Command>();
}
