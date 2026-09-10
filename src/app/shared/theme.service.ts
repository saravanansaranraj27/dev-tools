import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'dev-tools-theme';
  isDark = signal(true);

  constructor() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.isDark.set(stored === 'dark');
    } else {
      this.isDark.set(
        window.matchMedia('(prefers-color-scheme: dark)').matches,
      );
    }
    this.applyTheme();
  }

  toggle(): void {
    this.isDark.set(!this.isDark());
    localStorage.setItem(this.STORAGE_KEY, this.isDark() ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute(
      'data-theme',
      this.isDark() ? 'dark' : 'light',
    );
  }
}
