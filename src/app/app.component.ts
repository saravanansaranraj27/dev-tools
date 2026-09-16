import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { filter, Subscription } from 'rxjs';

type SkeletonType = 'home' | 'cheatsheet' | 'formatter' | 'base64';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading = true;
  showBackToTop = false;
  skeletonType: SkeletonType = 'home';

  private routerSubscription?: Subscription;
  private scrollHandler?: () => void;
  private loadingStartedAt = performance.now();
  private navigationId = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setSkeletonFromUrl(this.router.url);

    this.routerSubscription = this.router.events
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
          this.navigationId++;
          this.loadingStartedAt = performance.now();
          this.setSkeletonFromUrl(event.url);
          this.isLoading = true;
          return;
        }

        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          const currentNavigation = this.navigationId;
          const elapsed = performance.now() - this.loadingStartedAt;
          const minimumDuration = 800;
          const remaining = Math.max(0, minimumDuration - elapsed);

          setTimeout(() => {
            if (currentNavigation === this.navigationId) {
              requestAnimationFrame(() => {
                this.isLoading = false;
              });
            }
          }, remaining);
        }
      });

    this.scrollHandler = () => {
      const threshold = window.innerWidth <= 768 ? 150 : 400;
      this.showBackToTop = window.scrollY > threshold;
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });

    setTimeout(() => {
      window.dispatchEvent(new Event('app-ready'));
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();

    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  private setSkeletonFromUrl(url: string): void {
    const path = url.split('?')[0].split('#')[0];

    if (path.startsWith('/cheatsheet')) {
      this.skeletonType = 'cheatsheet';
    } else if (path.startsWith('/formatter')) {
      this.skeletonType = 'formatter';
    } else if (path.startsWith('/base64')) {
      this.skeletonType = 'base64';
    } else {
      this.skeletonType = 'home';
    }
  }
}
