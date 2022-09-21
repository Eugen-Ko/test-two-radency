import { KEY_LS } from "assets/initData";
import { ToDoRecord } from "assets/interfaces";

export const init = (): ToDoRecord[] | any => {
  try {
    const init = require("assets/initialToDo.json");
    localStorage.setItem(`${KEY_LS}`, JSON.stringify(init));
    return init;
  } catch (error) {
    console.log(error);
  }
};
