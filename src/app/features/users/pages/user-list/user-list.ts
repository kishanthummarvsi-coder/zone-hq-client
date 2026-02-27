import { Component } from '@angular/core';
import { KanbanColumnModel } from '../../../../shared/components/kanban/models/kanban.model';
import { TableColumn } from '../../../../shared/models/table-column.model';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';
import { PagedRequest } from '../../../../shared/models/paged-request.model';
import { Observable } from 'rxjs';
import { PagedResponse } from '../../../../shared/models/paged-response.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  columns: TableColumn[] = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'roleName', label: 'Role', sortable: true },
    { key: 'createdOn', label: 'Created On', sortable: true },
    { key: 'status', label: 'Status', sortable: false }
  ];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  fetchUsers = (request: PagedRequest): Observable<PagedResponse<User>> => {
    return this.userService.getPaged(request);
  };

  onEdit(user: User) {
    // this.router.navigate(['/users/edit', user.id]);
    console.log('edit user', user);
  }

  onDelete(user: User) {
    console.log('Delete user', user);
  }
}
