import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KanbanColumnModel } from '../models/kanban.model';

@Component({
  selector: 'app-kanban-column',
  standalone: false,
  templateUrl: './kanban-column.html',
  styleUrl: './kanban-column.scss',
})
export class KanbanColumn {
  @Input() column!: KanbanColumnModel ;
  @Input() connectedDropLists: string[] = [];
  @Output() taskDropped = new EventEmitter<CdkDragDrop<any[]>>();

  onDrop(event: CdkDragDrop<any[]>) {
    this.taskDropped.emit(event);
  }
}
