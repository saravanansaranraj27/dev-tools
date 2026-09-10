import { Component, signal } from '@angular/core';

type ContentType =
  | 'ASCII Text'
  | 'JSON'
  | 'HTML/XML'
  | 'URL Query'
  | 'Unicode'
  | 'Emoji'
  | 'Binary/Data'
  | 'Empty'
  | 'Unknown';

@Component({
  selector: 'app-base64-page',
  standalone: true,
  templateUrl: './base64-page.component.html',
  styleUrl: './base64-page.component.scss',
})
export class Base64PageComponent {
  input = signal('');
  mode = signal<'encode' | 'decode'>('encode');
  errorMsg = signal<string | null>(null);
  outputText = signal('');
  detectedType = signal<ContentType>('Empty');
  isCopied = signal(false);

  setMode(mode: 'encode' | 'decode'): void {
    this.mode.set(mode);
    this.errorMsg.set(null);
    this.process();
  }

  onInput(value: string): void {
    this.input.set(value);
    this.errorMsg.set(null);
    this.detectType(value);
    this.process();
  }

  clear(): void {
    this.input.set('');
    this.outputText.set('');
    this.errorMsg.set(null);
    this.detectedType.set('Empty');
    this.isCopied.set(false);
  }

  private detectType(value: string): void {
    if (!value) {
      this.detectedType.set('Empty');
      return;
    }

    if (
      /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}]/u.test(
        value,
      )
    ) {
      this.detectedType.set('Emoji');
      return;
    }

    if (/[^\x00-\x7F]/.test(value)) {
      this.detectedType.set('Unicode');
      return;
    }

    const trimmed = value.trim();
    if (
      (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
      (trimmed.startsWith('[') && trimmed.endsWith(']'))
    ) {
      try {
        JSON.parse(trimmed);
        this.detectedType.set('JSON');
        return;
      } catch {}
    }

    if (/<[a-zA-Z][^>]*>/.test(value)) {
      this.detectedType.set('HTML/XML');
      return;
    }

    if (
      /^[^=]+=[^&]+(&[^=]+=[^&]+)*$/.test(trimmed) ||
      /^https?:\/\//.test(trimmed)
    ) {
      this.detectedType.set('URL Query');
      return;
    }

    if (/^[\x20-\x7E]+$/.test(value)) {
      this.detectedType.set('ASCII Text');
      return;
    }

    this.detectedType.set('Binary/Data');
  }

  private process(): void {
    const raw = this.input();
    if (!raw) {
      this.outputText.set('');
      return;
    }

    try {
      if (this.mode() === 'encode') {
        this.outputText.set(btoa(unescape(encodeURIComponent(raw))));
      } else {
        this.outputText.set(decodeURIComponent(escape(atob(raw.trim()))));
      }
      this.errorMsg.set(null);
    } catch {
      this.outputText.set('');
      this.errorMsg.set(
        this.mode() === 'decode'
          ? 'Invalid Base64 input. Ensure the string is properly encoded.'
          : 'Encoding failed. Input contains unsupported characters.',
      );
    }
  }

  async copyOutput(): Promise<void> {
    const val = this.outputText();
    if (!val) return;
    await navigator.clipboard.writeText(val);
    this.isCopied.set(true);
    setTimeout(() => this.isCopied.set(false), 1500);
  }
}
