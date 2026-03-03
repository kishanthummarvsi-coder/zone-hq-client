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
import { PaginationComponent } from './components/pagination-component/pagination-component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

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
    MatInputModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [
    KanbanModule,
    DynamicTable,
    PaginationComponent
  ],
  declarations: [
    DynamicTable,
    PaginationComponent
  ]
})
export class SharedModule { }
