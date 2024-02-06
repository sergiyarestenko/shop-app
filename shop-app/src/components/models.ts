export interface ITodo {
  id: string;
  content?: string;
  quantity?: number | string;
  measure?: string;
  completed?: boolean;
}

export interface ITodoItem {
  id: string;
  todos: ITodo[];
  assignedTo?: string;
  completed?: boolean;
}
