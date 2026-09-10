import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  theme = inject(ThemeService);

  navItems = [
    { path: '/cheatsheet', label: 'Cheat Sheets' },
    { path: '/formatter', label: 'JSON Formatter' },
    { path: '/base64', label: 'Base64 Tool' },
  ];
}
