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
  isNewEdit: boolean;
  isArch: boolean;
  currentEl: ToDoRecord;
}

export interface IArgsTableEl {
  header: boolean;
  typeTab: string;
  data: { data: string[]; id: string };
}
