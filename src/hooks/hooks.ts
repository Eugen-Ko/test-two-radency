import { createStat } from "services/createStat";
import { useAppSelector } from "hooks/redux";
import { useState, useEffect } from "react";
import { checkExpDate } from "services/checkExpDate";

interface Element {
  data: string[];
  id: string;
}

export const useRenderTableList = (typeTab = "") => {
  const records = useAppSelector((state) => state.todo.todos);
  const currenCat = useAppSelector((state) => state.todo.currentCat);
  const [currentList, setCurrentList] = useState<Array<Element>>([]);

  useEffect(() => {
    switch (typeTab) {
      case "todo":
        const resTodo = records
          .filter((el) => !el.isArch)
          .map((el) => {
            return {
              data: [
                el.category + "SVG",
                el.name,
                el.createDate,
                el.category,
                el.content,
                el.expDate ? el.expDate : checkExpDate(el.content),
                "editSVG",
                "archiveSVG",
                "deleteSVG",
              ],
              id: el.id,
            };
          });
        setCurrentList(resTodo);
        break;
      case "stat":
        const resStat = createStat(records).map((el) => {
          return {
            data: [
              el.catName + "SVG",
              el.catName,
              "",
              String(el.active),
              "",
              String(el.archive),
              "",
              "",
              "",
            ],
            id: el.catName,
          };
        });
        setCurrentList(resStat);
        break;
      case "arch":
        const resArch = records
          .filter((el) => el.isArch && el.category === currenCat)
          .map((el) => {
            return {
              data: [
                el.category + "SVG",
                el.name,
                el.createDate,
                el.category,
                el.content,
                el.expDate ? el.expDate : checkExpDate(el.content),
                "",
                "",
                "unArchiveSVG",
              ],
              id: el.id,
            };
          });
        setCurrentList(resArch);
        break;
    }
  }, [currenCat, records, typeTab]);

  return currentList;
};
