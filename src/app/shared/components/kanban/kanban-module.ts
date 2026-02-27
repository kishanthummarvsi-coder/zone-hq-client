import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoard } from './kanban-board/kanban-board';
import { KanbanColumn } from './kanban-column/kanban-column';
import { KanbanCard } from './kanban-card/kanban-card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    KanbanBoard,
    KanbanColumn,
    KanbanCard
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    KanbanBoard
  ]
})
export class KanbanModule { }
