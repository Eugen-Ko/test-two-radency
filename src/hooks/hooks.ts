import { createStat } from "services/createStat";
import { useAppSelector } from "hooks/redux";
import { useState, useEffect } from "react";
import { ToDoRecord } from "assets/interfaces";

export const useRenderTableList = (stat = "") => {
  const records = useAppSelector((state) => state.todo.todos);
  const [currentList, setCurrentList] = useState<Array<string[]>>([]);

  useEffect(() => {
    let res: Array<string[]> = [];
    switch (stat) {
      case "":
        res = records.length
          ? records
              .filter((el) => !el.isArch)
              .map((el: ToDoRecord) => {
                const temp: string[] = [
                  el?.category + "SVG",
                  el?.name,
                  el?.createDate,
                  el?.category,
                  el?.content,
                  el?.expDate,
                  "editSVG",
                  "archiveSVG",
                  "deleteSVG",
                ];
                return temp;
              })
          : [];
        break;
      case "stat":
        res = records.length
          ? createStat(records).map(({ catName, active, archive }) => {
              return [
                catName + "SVG",
                catName,
                "",
                String(active),
                "",
                String(archive),
                "",
                "",
                "",
              ];
            })
          : [];
    }
    setCurrentList(res);
  }, [records, stat]);
  return currentList;
};
