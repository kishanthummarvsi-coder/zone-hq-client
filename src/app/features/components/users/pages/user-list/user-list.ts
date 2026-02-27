import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../../../shared/models/table-column.model';
import { Router } from '@angular/router';
import { PagedRequest } from '../../../../../shared/models/paged-request.model';
import { Observable } from 'rxjs';
import { PagedResponse } from '../../../../../shared/models/paged-response.model';
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
    pageSize: 5
  };

  totalCount = 0;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  fetchUsers = (): Observable<User[]> => {
    return this.userService.getAll();
  };

  onPageChange(event: any) {
    this.request.pageNumber = event.pageNumber;
    this.request.pageSize = event.pageSize;
  }

  onEdit(user: User) {
    console.log('edit user', user);
  }

  onDelete(user: User) {
    console.log('Delete user', user);
  }
}
