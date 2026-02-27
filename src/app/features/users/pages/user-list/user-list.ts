import { Component } from '@angular/core';
import { KanbanColumnModel } from '../../../../shared/components/kanban/models/kanban.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  columns: KanbanColumnModel[] = [
    {
      id: 'todo',
      title: 'Todo',
      tasks: [
        { id: '1', title: 'Create USer API', status: 'todo' },
        { id: '2', title: 'Design USer UI', status: 'todo' }
      ]
    },
    {
      id: 'progress',
      title: 'In Progress',
      tasks: [
        { id: '3', title: 'Implement Validation', status: 'progress' },
         { id: '', title: 'Design USer UI', status: 'todo' }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      tasks: []
    }
  ];

  onTaskMoved(event: any) {
    console.log('Task moved:', event);
  }
}
