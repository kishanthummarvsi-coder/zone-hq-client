import { Component } from '@angular/core';
import { KanbanColumnModel } from '../../../../../shared/models/kanban/kanban.model';

@Component({
  selector: 'app-role-list',
  standalone: false,
  templateUrl: './role-list.html',
  styleUrl: './role-list.scss',
})
export class RoleList {

columns: KanbanColumnModel[] = [
  {
    id: 'todo',
    title: 'Todo',
    tasks: [
      { id: 1, title: 'Create Role API', status: 'todo' },
      { id: 2, title: 'Design Role UI', status: 'todo' }
    ]
  },
  {
    id: 'progress',
    title: 'In Progress',
    tasks: [
      { id: 3, title: 'Implement Validation', status: 'progress' }
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
