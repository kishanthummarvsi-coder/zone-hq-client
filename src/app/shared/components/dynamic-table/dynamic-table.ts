import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TableColumn } from '../../models/dynamic-table/table-column.model';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-dynamic-table',
  standalone: false,
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.scss'
})
export class DynamicTable<T> implements OnChanges, AfterViewInit {

  @Input() columns: TableColumn[] = [];
  @Input() data: T[] = [];
  @Input() loading = false;
  @Input() showActions = false;

  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();
  @Output() sortChange = new EventEmitter<{
    sortField: string;
    sortDirection: 'asc' | 'desc';
  }>();

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedColumns = this.columns.map(c => c.key);

      if (this.showActions) {
        this.displayedColumns.push('actions');
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.sort) {
      this.sort.sortChange.subscribe((sort: Sort) => {
        if (!sort.direction) return;

        this.sortChange.emit({
          sortField: sort.active,
          sortDirection: sort.direction as 'asc' | 'desc'
        });
      });
    }
  }

  onEdit(row: T) {
    this.edit.emit(row);
  }

  onDelete(row: T) {
    this.delete.emit(row);
  }
}