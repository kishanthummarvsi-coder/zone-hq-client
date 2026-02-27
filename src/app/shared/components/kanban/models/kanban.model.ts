export interface KanbanTaskModel {
  id: number;
  title: string;
  description?: string;

  status: 'todo' | 'progress' | 'done';

  priority?: 'high' | 'medium' | 'low';
  dueDate?: Date;

  assignee?: {
    id: number;
    name: string;
    avatar: string;
  };
}

export interface KanbanColumnModel {
  id: string;
  title: string;
  tasks: KanbanTaskModel[];
}