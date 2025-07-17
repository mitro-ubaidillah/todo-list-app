export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface CreateTodoRequest {
  userId: number | null;
  title: string;
  complete: boolean;
}

export interface TodoParams {
  start?: number;
  limit?: number;
}