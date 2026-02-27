export interface KanbanTaskModel {
  id: string;
  title: string;
  description?: string;
  status: string;
}

export interface KanbanColumnModel {
  id: string;
  title: string;
  tasks: KanbanTaskModel[];
}