import { Injectable } from '@angular/core';
import { PaginationState } from '../models/pagination/pagination-state.model';
import { BehaviorSubject } from 'rxjs';
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

  private searchTerm: string = '';

  private stateSubject = new BehaviorSubject<PagedRequest>({
    pageNumber: 1,
    pageSize: 10,
    search: ''
  });

  state$ = this.stateSubject.asObservable();

  init() {
    this.emit();
  }

  updatePage(pageNumber: number) {
    this.state.pageNumber = pageNumber;
    this.emit();
  }

  updatePageSize(pageSize: number) {
    this.state.pageSize = pageSize;
    this.state.pageNumber = 1;
    this.emit();
  }

  updateTotalCount(total: number) {
    this.state.totalCount = total;
  }

  updateSearch(search: string) {
    this.searchTerm = search;
    this.state.pageNumber = 1;
    this.emit();
  }
  
  updateSort(sortField: any, sortDirection: any) {
    throw new Error('Method not implemented.');
  }

  private emit() {
    this.stateSubject.next({
      pageNumber: this.state.pageNumber,
      pageSize: this.state.pageSize,
      search: this.searchTerm
    });
  }

  get totalCount() {
    return this.state.totalCount;
  }

  get pageNumber() {
    return this.state.pageNumber;
  }

  get pageSize() {
    return this.state.pageSize;
  }
}
