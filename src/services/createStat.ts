import { categories } from "assets/initData";
import { ToDoRecord } from "assets/interfaces";

export const createStat = (records: ToDoRecord[]) => {
  return categories.map((el) => {
    return {
      catName: el,
      active: records.filter((rec) => rec.category === el && !rec.isArch)
        .length,
      archive: records.filter((rec) => rec.category === el && rec.isArch)
        .length,
    };
  });
};
