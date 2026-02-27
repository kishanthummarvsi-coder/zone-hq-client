import { Component, Input } from '@angular/core';
import { KanbanTaskModel } from '../models/kanban.model';

@Component({
  selector: 'app-kanban-card',
  standalone: false,
  templateUrl: './kanban-card.html',
  styleUrl: './kanban-card.scss',
})
export class KanbanCard {
  @Input() task!: KanbanTaskModel;
}
