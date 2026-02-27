import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedRequest } from '../../../shared/models/paged-request.model';
import { PagedResponse } from '../../../shared/models/paged-response.model';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = '/api/users';

  private users: User[] = [
    { id: 1, name: 'John Smith', email: 'john@example.com', roleName: 'Admin', createdOn: '2024-01-01', status: true },
    { id: 2, name: 'Alice Brown', email: 'alice@example.com', roleName: 'Manager', createdOn: '2024-01-05', status: true },
    { id: 3, name: 'David Wilson', email: 'david@example.com', roleName: 'User', createdOn: '2024-01-10', status: false },
    { id: 4, name: 'Emma Johnson', email: 'emma@example.com', roleName: 'User', createdOn: '2024-01-12', status: true },
    { id: 5, name: 'Michael Lee', email: 'michael@example.com', roleName: 'Manager', createdOn: '2024-01-15', status: true },
    { id: 6, name: 'Sophia Taylor', email: 'sophia@example.com', roleName: 'Admin', createdOn: '2024-01-18', status: false },
    { id: 7, name: 'Daniel Harris', email: 'daniel@example.com', roleName: 'User', createdOn: '2024-01-20', status: true },
    { id: 8, name: 'Olivia Martin', email: 'olivia@example.com', roleName: 'User', createdOn: '2024-01-22', status: true },
    { id: 9, name: 'James Anderson', email: 'james@example.com', roleName: 'Manager', createdOn: '2024-01-25', status: false },
    { id: 10, name: 'Isabella Thomas', email: 'isabella@example.com', roleName: 'User', createdOn: '2024-01-28', status: true }
  ];

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return of(this.users); 
  }
}
