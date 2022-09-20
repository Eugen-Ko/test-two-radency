import { RenderTableEl } from "components/renderTableEl";
import { nanoid } from "nanoid";
import { useRenderTableList } from "hooks/hooks";

export const RenderTableList = ({ stat = "" }) => {
  const currentList = useRenderTableList(stat);
  return (
    <>
      {currentList.map((el, index) => {
        return (
          <RenderTableEl
            header={false}
            data={el}
            lastChild={index === currentList.length - 1 ? true : false}
            stat={stat}
            key={nanoid()}
          />
        );
      })}
    </>
  );
};
