import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaginationState } from '../models/pagination/pagination-state.model';
import { PagedRequest } from '../models/pagination/paged-request.model';

@Injectable()
export class PaginationService {

  private state: PaginationState = {
    pageNumber: 1,
    pageSize: 10,
    totalCount: 0,
    search: '',
    sortField: '',
    sortDirection: 'asc',
  };

  private stateSubject = new BehaviorSubject<PagedRequest>({
    pageNumber: 1,
    pageSize: 10,
    search: '',
    sortField: '',
    sortDirection: 'asc'
  });

  state$ = this.stateSubject.asObservable();

  /* ===============================
     Initialization
  =============================== */

  init(): void {
    this.emit();
  }

  /* ===============================
     Pagination
  =============================== */

  updatePage(pageNumber: number): void {
    this.state.pageNumber = pageNumber;
    this.emit();
  }

  setPageSize(pageSize: number): void {
    this.state.pageSize = pageSize;
    this.state.pageNumber = 1; // reset
    this.emit();
  }

  updateTotalCount(total: number): void {
    this.state.totalCount = total;
  }

  /* ===============================
     Search
  =============================== */

  updateSearch(search: string): void {
    this.state.search = search;
    this.state.pageNumber = 1;
    this.emit();
  }

  /* ===============================
     Sorting
  =============================== */

  updateSort(
    sortField: string,
    sortDirection: 'asc' | 'desc'
  ): void {

    this.state.sortField = sortField;
    this.state.sortDirection = sortDirection || 'asc';
    this.state.pageNumber = 1;

    this.emit();
  }

  /* ===============================
     Emit State
  =============================== */

  private emit(): void {
    this.stateSubject.next({
      pageNumber: this.state.pageNumber,
      pageSize: this.state.pageSize,
      search: this.state.search,
      sortField: this.state.sortField,
      sortDirection: this.state.sortDirection
    });
  }

  /* ===============================
     Getters
  =============================== */

  get totalCount(): number {
    return this.state.totalCount;
  }

  get pageNumber(): number {
    return this.state.pageNumber;
  }

  get pageSize(): number {
    return this.state.pageSize;
  }
}