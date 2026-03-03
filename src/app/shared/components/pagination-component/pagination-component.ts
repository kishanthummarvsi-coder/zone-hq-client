import { Component, Input } from '@angular/core';
import { PaginationService } from '../../services/pagination-service';

@Component({
  selector: 'app-pagination-component',
  standalone: false,
  templateUrl: './pagination-component.html',
  styleUrl: './pagination-component.scss',
})
export class PaginationComponent {
  @Input() totalCount = 0;

  constructor(public paginationService: PaginationService) { }

  get totalPages(): number {
    return this.totalCount > 0
      ? Math.ceil(this.totalCount / this.paginationService.pageSize)
      : 0;
  }

  next(): void {
    if (this.paginationService.pageNumber < this.totalPages) {
      this.paginationService.updatePage(
        this.paginationService.pageNumber + 1
      );
    }
  }

  prev(): void {
    if (this.paginationService.pageNumber > 1) {
      this.paginationService.updatePage(
        this.paginationService.pageNumber - 1
      );
    }
  }

 goToPage(page: number): void {
    const pageNumber = Number(page);

    if (
      pageNumber >= 1 &&
      pageNumber <= this.totalPages &&
      !isNaN(pageNumber)
    ) {
      this.paginationService.updatePage(pageNumber);
    }
  }

  changePageSize(size: number): void {
    this.paginationService.setPageSize(size);

    this.paginationService.updatePage(1);
  }
}
