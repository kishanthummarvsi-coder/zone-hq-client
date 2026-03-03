import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../../../shared/models/dynamic-table/table-column.model';
import { Router } from '@angular/router';
import { PagedRequest } from '../../../../../shared/models/pagination/paged-request.model';
import { Observable } from 'rxjs';
import { PagedResponse } from '../../../../../shared/models/pagination/paged-response.model';
import { UserService } from '../../../../services/user-service';
import { User } from '../../../../models/users/user.model';
import { PaginationService } from '../../../../../shared/services/pagination-service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  providers: [PaginationService]
})
export class UserList implements OnInit {

  columns: TableColumn[] = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'roleName', label: 'Role', sortable: true },
    { key: 'createdOn', label: 'Created On', sortable: true },
    { key: 'status', label: 'Status', sortable: false }
  ];

  request: PagedRequest = {
    pageNumber: 1,
    pageSize: 10,
    search: '',
    sortField: '',
    sortDirection: 'asc'
  };

  users: User[] = [];
  totalCount = 0;
  loading = false;

  constructor(
    private userService: UserService,
    private router: Router,
    public paginationService: PaginationService
  ) { }

  ngOnInit(): void {
    this.paginationService.state$.subscribe((request: PagedRequest) => {
      this.loadUsers(request);
    });

    this.paginationService.init();
  }
  private loadUsers(request: PagedRequest) {
    this.loading = true;

    this.userService.getUsers(request)
      .subscribe({
        next: (response: PagedResponse<User>) => {
          this.users = response.data;
          this.totalCount = response.totalRecords;

          this.paginationService.updateTotalCount(response.totalRecords);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  fetchUsers = (): Observable<PagedResponse<User>> => {
    return this.userService.getUsers(this.request);
  };

  onSortChange(event: any) {
    this.paginationService.updateSort(
      event.sortField,
      event.sortDirection
    );
  }

  onEdit(user: User) {
    console.log('edit user', user);
  }

  onDelete(user: User) {
    console.log('Delete user', user);
  }
}
