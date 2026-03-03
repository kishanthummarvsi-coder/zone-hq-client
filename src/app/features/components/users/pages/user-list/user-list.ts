import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../../../shared/models/dynamic-table/table-column.model';
import { Router } from '@angular/router';
import { PagedRequest } from '../../../../../shared/models/pagination/paged-request.model';
import { Observable } from 'rxjs';
import { PagedResponse } from '../../../../../shared/models/pagination/paged-response.model';
import { UserService } from '../../../../services/user-service';
import { User } from '../../../../models/users/user.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
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

  totalCount = 0;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.request)
      .subscribe((response: PagedResponse<User>) => {
        this.totalCount = response.totalRecords;
      });
  }

  fetchUsers = (): Observable<PagedResponse<User>> => {
    return this.userService.getUsers(this.request);
  };

  onPageChange(event: any) {
    this.request.pageNumber = event.pageNumber;
    this.request.pageSize = event.pageSize;
    this.loadUsers();
  }

  onSortChange(event: any) {
    this.request.sortField = event.sortField;
    this.request.sortDirection = event.sortDirection;
    this.loadUsers();
  }

  onSearch(searchText: string) {
    this.request.search = searchText;
    this.request.pageNumber = 1; 
    this.loadUsers();
  }

  onEdit(user: User) {
    console.log('edit user', user);
  }

  onDelete(user: User) {
    console.log('Delete user', user);
  }
}
