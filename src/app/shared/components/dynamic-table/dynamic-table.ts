import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TableColumn } from '../../models/table-column.model';
import { PagedRequest } from '../../models/paged-request.model';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { PagedResponse } from '../../models/paged-response.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { PaginationService } from '../../services/pagination';

@Component({
  selector: 'app-dynamic-table',
  standalone: false,
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.scss',
  providers: [PaginationService]
})
export class DynamicTable<T> implements OnInit, AfterViewInit {
  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();

  @Input() columns: TableColumn[] = [];
  @Input() fetchFn!: (req: PagedRequest) => Observable<PagedResponse<T>>;
  @Input() showActions = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  data: T[] = [];
  totalCount = 0;
  displayedColumns: string[] = [];

  searchControl = new FormControl('');

  loading = false;

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.key);

    if (this.showActions) {
      this.displayedColumns.push('actions');
    }

    this.subscribeToState();
    this.setupSearch();
  }

  ngAfterViewInit(): void {
    this.setupPaginator();
    this.setupSorting();
  }

  private subscribeToState() {
    this.paginationService.state$.subscribe(() => {
      this.loadData();
    });
  }

  private loadData() {
    if (!this.fetchFn) return;

    this.loading = true;

    const request = this.paginationService.buildRequest();

    this.fetchFn(request).subscribe({
      next: (response) => {
        this.data = response.items;
        this.totalCount = response.totalCount;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  private setupPaginator() {
    this.paginator.page.subscribe(event => {
      this.paginationService.setPage(event.pageIndex + 1);
      this.paginationService.setPageSize(event.pageSize);
    });
  }

  private setupSorting() {
    this.sort.sortChange.subscribe((sort: Sort) => {
      this.paginationService.setSort(
        sort.active,
        sort.direction as 'asc' | 'desc'
      );
    });
  }

  private setupSearch() {
    this.searchControl.valueChanges
      ?.pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.paginationService.setSearch(value || '');
      });
  }
}