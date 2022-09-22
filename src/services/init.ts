import { KEY_LS } from "assets/initData";
import { ToDoRecord } from "assets/interfaces";

export const init = (): ToDoRecord[] | any => {
  try {
    if (!localStorage.getItem(`${KEY_LS}`)) {
      const init = require("assets/initialToDo.json");
      localStorage.setItem(`${KEY_LS}`, JSON.stringify(init));
      return init;
    }
    return JSON.parse(localStorage.getItem(`${KEY_LS}`) || "[]");
  } catch (error) {
    console.log(error);
  }
};
