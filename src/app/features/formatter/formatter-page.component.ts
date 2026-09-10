import { Component, computed, signal } from '@angular/core';
import {
  FormatControlsComponent,
  FormatMode,
} from './format-controls.component';
import { CodeEditorComponent } from './code-editor.component';
import { ValidationStatusComponent } from './validation-status.component';

@Component({
  selector: 'app-formatter-page',
  standalone: true,
  imports: [
    FormatControlsComponent,
    CodeEditorComponent,
    ValidationStatusComponent,
  ],
  templateUrl: './formatter-page.component.html',
  styleUrl: './formatter-page.component.scss',
})
export class FormatterPageComponent {
  inputJson = signal('');
  outputJson = signal('');
  errorMsg = signal<string | null>(null);
  mode = signal<FormatMode>('prettify');
  indent = signal(2);
  isValidated = signal(false);

  showValidation = computed(() => {
    return (
      this.mode() === 'validate' &&
      (this.errorMsg() !== null || this.isValidated())
    );
  });

  onFormat(): void {
    const raw = this.inputJson().trim();
    if (!raw) {
      this.errorMsg.set('Please enter some JSON to format');
      this.outputJson.set('');
      this.isValidated.set(false);
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      this.errorMsg.set(null);

      switch (this.mode()) {
        case 'validate':
          this.outputJson.set('');
          this.isValidated.set(true);
          break;
        case 'minify':
          this.outputJson.set(JSON.stringify(parsed));
          this.isValidated.set(false);
          break;
        default:
          this.outputJson.set(JSON.stringify(parsed, null, this.indent()));
          this.isValidated.set(false);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      const posMatch = msg.match(/position\s+(\d+)/i);
      const pos = posMatch ? ` at position ${posMatch[1]}` : '';
      this.errorMsg.set(`Invalid JSON${pos}: ${msg.split(':').pop()?.trim()}`);
      this.outputJson.set('');
      this.isValidated.set(false);
    }
  }

  onClear(): void {
    this.inputJson.set('');
    this.outputJson.set('');
    this.errorMsg.set(null);
    this.isValidated.set(false);
  }
}
