import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  Router,
  NavigationEnd,
} from '@angular/router';
import { ThemeService } from '../theme.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  theme = inject(ThemeService);
  router = inject(Router);

  navItems = [
    { path: '/cheatsheet', label: 'Cheat Sheets' },
    { path: '/formatter', label: 'JSON Formatter' },
    { path: '/base64', label: 'Base64 Tool' },
  ];

  isMenuOpen = false;
  activePath = '';
  private routerSub?: Subscription;

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activePath = this.router.url;
        this.isMenuOpen = false;
      });

    this.activePath = this.router.url;
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isActive(path: string): boolean {
    return this.activePath === path;
  }
}
