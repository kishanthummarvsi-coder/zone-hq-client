import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanModule } from './components/kanban/kanban-module';
import { DynamicTable } from './components/dynamic-table/dynamic-table';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KanbanModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    KanbanModule,
    DynamicTable
  ],
  declarations: [
    DynamicTable
  ]
})
export class SharedModule { }
