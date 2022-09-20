import { useSelector } from "react-redux";
import { RenderTableEl } from "components/renderTableEl";
import todosSelectors from "redux/todo/todoSelector";
import { useEffect, useState } from "react";
import { createStat } from "services/createStat";

export const RenderTableList = ({ stat = "" }) => {
  const records = useSelector(todosSelectors.getAllRecord);
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

  return (
    <>
      {currentList.map((el, index) => {
        return (
          <RenderTableEl
            header={false}
            data={el}
            lastChild={index === currentList.length - 1 ? true : false}
            stat={stat}
          />
        );
      })}
    </>
  );
};
