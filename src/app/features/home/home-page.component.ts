import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  tools = [
    {
      path: '/cheatsheet',
      title: 'Cheat Sheets',
      desc: 'Quick-reference guides for Git, CSS, JavaScript, TypeScript, Java, Spring Boot, Python, FastAPI, Regex, and SQL.',
      icon: 'book',
      topics: 10,
      commands: 292,
    },
    {
      path: '/formatter',
      title: 'JSON Formatter',
      desc: 'Prettify, minify, or validate JSON entirely in your browser. No data leaves your device.',
      icon: 'code',
      features: ['Prettify', 'Minify', 'Validate'],
    },
    {
      path: '/base64',
      title: 'Base64 Tool',
      desc: 'Encode and decode Base64 with full UTF-8 and emoji support. Auto-detects content type.',
      icon: 'lock',
      features: ['Encode', 'Decode', 'UTF-8 Safe'],
    },
  ];
}
