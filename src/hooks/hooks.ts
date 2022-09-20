import { createStat } from "services/createStat";
import todosSelectors from "redux/todo/todosSelectors";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ToDoRecord } from "assets/interfaces";

export const useRenderTableList = (stat = "") => {
  const records: ToDoRecord[] = useSelector(todosSelectors.getAllRecord);
  const [currentList, setCurrentList] = useState<Array<string[]>>([]);

  useEffect(() => {
    let res: Array<string[]> = [];
    switch (stat) {
      case "":
        res = records.map(
          ({ name, createDate, category, content, expDate }) => {
            const temp: string[] = [
              category + "SVG",
              name,
              createDate,
              category,
              content,
              expDate,
              "editSVG",
              "archiveSVG",
              "deleteSVG",
            ];

            return temp;
          }
        );
        break;
      case "stat":
        res = createStat(records).map(({ catName, active, archive }) => {
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
        });
    }
    setCurrentList(res);
  }, [records, stat]);
  return currentList;
};
