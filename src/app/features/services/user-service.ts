import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/users/user.model';
import { PagedRequest } from '../../shared/models/pagination/paged-request.model';
import { PagedResponse } from '../../shared/models/pagination/paged-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = '/api/users';

  private users: User[] = [];

  constructor(private http: HttpClient) { this.generateDummyUsers(); }

  getUsers(request: PagedRequest): Observable<PagedResponse<User>> {

    let data = [...this.users];

    if (request.search) {
      const search = request.search.toLowerCase();
      data = data.filter(u =>
        u.name.toLowerCase().includes(search) ||
        u.email.toLowerCase().includes(search) ||
        u.roleName.toLowerCase().includes(search)
      );
    }

    if (request.sortField && request.sortDirection) {
      data.sort((a: any, b: any) => {

        let valueA = a[request.sortField!];
        let valueB = b[request.sortField!];

        if (typeof valueA === 'boolean') {
          valueA = valueA ? 1 : 0;
          valueB = valueB ? 1 : 0;
        }

        if (request.sortField === 'createdOn') {
          valueA = new Date(valueA).getTime();
          valueB = new Date(valueB).getTime();
        }

        if (valueA < valueB) return request.sortDirection === 'asc' ? -1 : 1;
        if (valueA > valueB) return request.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const totalRecords = data.length;

    const startIndex = (request.pageNumber - 1) * request.pageSize;
    const endIndex = startIndex + request.pageSize;
    const paginatedData = data.slice(startIndex, endIndex);

    const response: PagedResponse<User> = {
      data: paginatedData,
      totalRecords,
      pageNumber: request.pageNumber,
      pageSize: request.pageSize,
      totalPages: Math.ceil(totalRecords / request.pageSize)
    };

    return of(response);
  }

  private generateDummyUsers() {
    for (let i = 1; i <= 200; i++) {
      this.users.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@demo.com`,
        roleName: i % 2 === 0 ? 'Admin' : 'User',
        createdOn: new Date(
          2024,
          Math.floor(Math.random() * 12),
          Math.floor(Math.random() * 28) + 1
        ).toISOString(),
        status: i % 3 !== 0
      });
    }
  }

}
