import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    @if (isLoading) {
      <div class="page-loader">
        <div class="loader-spinner"></div>
      </div>
    }
    <div
      class="app-shell"
      [style.visibility]="isLoading ? 'hidden' : 'visible'"
    >
      <app-navbar />
      <main class="app-main">
        <router-outlet />
      </main>

      @if (showBackToTop) {
        <button
          class="back-to-top"
          (click)="scrollToTop()"
          aria-label="Back to top"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      }
    </div>
  `,
  styles: [
    `
      .app-shell {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .app-main {
        flex: 1;
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading = true;
  showBackToTop = false;
  private routerSub?: Subscription;
  private scrollListener?: () => void;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError,
        ),
      )
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        } else {
          setTimeout(() => {
            this.isLoading = false;
          }, 300);
        }
      });

    this.scrollListener = () => {
      this.showBackToTop = window.scrollY > 400;
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }
}
