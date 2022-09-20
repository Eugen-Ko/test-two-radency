import { State } from "assets/interfaces";

const getAllRecord = (state: State) => state.todos;

const todosSelectors = {
  getAllRecord,
};

export default todosSelectors;
