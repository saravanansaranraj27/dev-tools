import { Component, input } from '@angular/core';
import { CopyButtonComponent } from './copy-button.component';
import type { Command } from '../../data/cheat-sheet.data';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CopyButtonComponent],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  command = input.required<Command>();
}
