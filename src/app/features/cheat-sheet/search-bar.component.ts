import {
  Component,
  ElementRef,
  output,
  viewChild,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  template: `
    <div class="cs-search-wrapper">
      <!-- Search Icon -->
      <svg
        class="cs-search-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        #searchInput
        class="cs-search-input"
        type="text"
        placeholder="Search commands..."
        (input)="onSearch($event)"
      />
      <!-- Ctrl+K Shortcut Badge -->
      <span class="cs-shortcut-badge"> <kbd>⌘</kbd><kbd>K</kbd> </span>
    </div>
  `,
  styles: [
    `
      .cs-search-wrapper {
        position: relative;
        flex: 0 1 320px;
        display: flex;
        align-items: center;
      }

      .cs-search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        color: var(--icon-color);
        pointer-events: none;
        transition: color var(--transition);
      }

      .cs-search-input {
        width: 100%;
        padding: 10px 72px 10px 38px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        color: var(--text-primary);
        font-size: 0.9rem;
        outline: none;
        transition: all var(--transition);
      }

      .cs-search-input:focus {
        border-color: var(--accent);
        box-shadow: 0 0 0 3px var(--accent-glow);
      }

      .cs-search-input::placeholder {
        color: var(--text-secondary);
        opacity: 0.6;
      }

      .cs-shortcut-badge {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        gap: 3px;
        pointer-events: none;
      }

      .cs-shortcut-badge kbd {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 22px;
        height: 22px;
        padding: 0 5px;
        font-family: var(--font-sans);
        font-size: 0.65rem;
        font-weight: 600;
        line-height: 1;
        color: var(--text-secondary);
        background: var(--bg-tertiary);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        transition: all var(--transition);
      }

      @media (max-width: 768px) {
        .cs-search-wrapper {
          flex: 1 1 auto;
        }
        .cs-shortcut-badge {
          display: none;
        }
      }
    `,
  ],
})
export class SearchBarComponent {
  searchChange = output<string>();
  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  @HostListener('window:keydown', ['$event'])
  handleShortcut(event: KeyboardEvent): void {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.searchInput()?.nativeElement.focus();
    }
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }
}
