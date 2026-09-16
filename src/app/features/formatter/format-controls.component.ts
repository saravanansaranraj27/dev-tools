import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

export type FormatMode = 'prettify' | 'minify' | 'validate';

@Component({
  selector: 'app-format-controls',
  standalone: true,
  imports: [FormsModule, CapitalizePipe],
  templateUrl: './format-controls.component.html',
  styleUrl: './format-controls.component.scss',
})
export class FormatControlsComponent {
  modes: FormatMode[] = ['prettify', 'minify', 'validate'];
  mode = input.required<FormatMode>();
  indent = input.required<number>();
  modeChange = output<FormatMode>();
  indentChange = output<number>();
  format = output<void>();
  clear = output<void>();
}
