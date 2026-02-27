import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { KanbanColumnModel } from '../models/kanban.model';

@Component({
  selector: 'app-kanban-board',
  standalone: false,
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss',
})
export class KanbanBoard implements OnChanges {
  @Input() columns: KanbanColumnModel[] = [];
  @Output() taskMoved = new EventEmitter<any>();

  dropListIds: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.dropListIds = this.columns.map(col => 'cdk-drop-' + col.id);
    }
  }

  drop(event: CdkDragDrop<any[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.taskMoved.emit(event);
  }
}
