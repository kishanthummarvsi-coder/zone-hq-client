import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TableColumn } from '../../models/table-column.model';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { MatSort, Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  standalone: false,
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.scss'
})
export class DynamicTable<T> implements OnInit, AfterViewInit {
  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();

  @Input() columns: TableColumn[] = [];
  @Input() fetchFn!: () => Observable<T[]>;
  @Input() showActions = false;

  @ViewChild(MatSort) sort!: MatSort;

  data: T[] = [];
  displayedColumns: string[] = [];

  loading = false;

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.key);

    if (this.showActions) {
      this.displayedColumns.push('actions');
    }

    this.loadData();
  }

  ngAfterViewInit(): void {
    this.setupSorting();
  }

  private loadData() {
    if (!this.fetchFn) return;

    this.loading = true;

    this.fetchFn().subscribe({
      next: (response) => {
        this.data = response;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  private setupSorting() {
    this.sort.sortChange.subscribe((sort: Sort) => {
      if (!sort.direction) return;

      this.data = [...this.data].sort((a: any, b: any) => {
        const valueA = a[sort.active];
        const valueB = b[sort.active];

        if (valueA < valueB) return sort.direction === 'asc' ? -1 : 1;
        if (valueA > valueB) return sort.direction === 'asc' ? 1 : -1;
        return 0;
      });
    });
  }
 
}