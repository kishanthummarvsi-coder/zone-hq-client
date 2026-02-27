export interface PaginationState {
  pageNumber: number;
  pageSize: number;
  search: string;
  sortField: string;
  sortDirection: 'asc' | 'desc';
}