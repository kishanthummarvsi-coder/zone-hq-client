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
    return Math.ceil(this.totalCount / this.paginationService.pageSize);
  }

  next() {
    if (this.paginationService.pageNumber < this.totalPages) {
      this.paginationService.updatePage(this.paginationService.pageNumber + 1);
    }
  }

  prev() {
    if (this.paginationService.pageNumber > 1) {
      this.paginationService.updatePage(this.paginationService.pageNumber - 1);
    }
  }

  goTo(page: number) {
    this.paginationService.updatePage(page);
  }
}
