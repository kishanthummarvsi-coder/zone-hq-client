export interface PagedRequest {
  pageNumber: number;
  pageSize: number;
  search?: string;
  sortField?: string;
  sortDirection?: 'asc' | 'desc';
  filters?: Record<string, any>; 
}