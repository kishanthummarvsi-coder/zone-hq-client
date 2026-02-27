import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaginationState } from '../models/pagination-state.model';
import { PagedRequest } from '../models/paged-request.model';

@Injectable()
export class PaginationService {

  private defaultState: PaginationState = {
    pageNumber: 1,
    pageSize: 10,
    search: '',
    sortField: '',
    sortDirection: 'asc'
  };

  private stateSubject = new BehaviorSubject<PaginationState>(this.defaultState);

  state$ = this.stateSubject.asObservable();

  get currentState(): PaginationState {
    return this.stateSubject.value;
  }

  setPage(pageNumber: number) {
    this.updateState({ pageNumber });
  }

  setPageSize(pageSize: number) {
    this.updateState({ pageSize, pageNumber: 1 });
  }

  setSearch(search: string) {
    this.updateState({ search, pageNumber: 1 });
  }

  setSort(sortField: string, sortDirection: 'asc' | 'desc') {
    this.updateState({ sortField, sortDirection, pageNumber: 1 });
  }

  reset() {
    this.stateSubject.next(this.defaultState);
  }

  buildRequest(): PagedRequest {
    const state = this.currentState;

    return {
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      search: state.search,
      sortField: state.sortField,
      sortDirection: state.sortDirection
    };
  }

  private updateState(partial: Partial<PaginationState>) {
    const updated = { ...this.currentState, ...partial };
    this.stateSubject.next(updated);
  }
}