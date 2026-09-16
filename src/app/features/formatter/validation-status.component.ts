import { Component, input } from '@angular/core';

@Component({
  selector: 'app-validation-status',
  standalone: true,
  templateUrl: './validation-status.component.html',
  styleUrl: './validation-status.component.scss',
})
export class ValidationStatusComponent {
  error = input<string | null>(null);
  isValid = input(false);
}
