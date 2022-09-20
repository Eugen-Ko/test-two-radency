export interface ToDoRecord {
  name: string;
  createDate: string;
  category: string;
  content: string;
  expDate: string;
  isArch: boolean;
  id: string;
}

export interface State {
  todos: ToDoRecord[];
  isModalNewEdit: boolean;
  isModalArch: boolean;
}
