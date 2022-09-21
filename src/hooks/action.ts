import { todosActions } from "store/todos/todos.slices";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const action = {
  ...todosActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(action, dispatch);
};
