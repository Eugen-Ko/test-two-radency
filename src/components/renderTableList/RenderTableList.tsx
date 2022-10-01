import { RenderTableEl } from "components/renderTableEl";
import { nanoid } from "nanoid";
import { useRenderTableList } from "hooks/hooks";

export const RenderTableList = ({ typeTab = "" }) => {
  const currentList = useRenderTableList(typeTab);
  return (
    <>
      {currentList.map((data, index) => {
        return (
          <RenderTableEl
            header={false}
            data={data}
            // lastEl={index === currentList.length - 1 ? true : false}
            typeTab={typeTab}
            key={nanoid()}
          />
        );
      })}
    </>
  );
};
