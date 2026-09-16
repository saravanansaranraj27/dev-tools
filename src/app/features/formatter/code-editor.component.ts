import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss',
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
