import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanModule } from './components/kanban/kanban-module';

@NgModule({
  imports: [
    CommonModule,
    KanbanModule
  ],
  exports: [
    KanbanModule
  ]
})
export class SharedModule { }
