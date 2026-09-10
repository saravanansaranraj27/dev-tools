import { Component, computed, signal } from '@angular/core';
import { CHEAT_SHEET_DATA, TopicKey } from '../../data/cheat-sheet.data';
import { SearchBarComponent } from './search-bar.component';
import { CategoryCardComponent } from './category-card.component';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-cheat-sheet-page',
  standalone: true,
  imports: [SearchBarComponent, CategoryCardComponent, CapitalizePipe],
  templateUrl: './cheat-sheet-page.component.html',
  styleUrl: './cheat-sheet-page.component.scss',
})
export class CheatSheetPageComponent {
  topics = Object.keys(CHEAT_SHEET_DATA) as TopicKey[];
  activeTopic = signal<TopicKey>(this.topics[0]);
  searchQuery = signal('');

  filteredData = computed(() => {
    const data = CHEAT_SHEET_DATA[this.activeTopic()];
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return data;

    return data
      .map((cat) => ({
        ...cat,
        commands: cat.commands.filter(
          (c) =>
            c.name.toLowerCase().includes(q) ||
            c.cmd.toLowerCase().includes(q) ||
            c.desc.toLowerCase().includes(q),
        ),
      }))
      .filter((cat) => cat.commands.length > 0);
  });

  setTopic(topic: TopicKey): void {
    this.activeTopic.set(topic);
    this.searchQuery.set('');
  }

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }
}
