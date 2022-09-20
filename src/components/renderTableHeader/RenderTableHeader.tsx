import { RenderTableEl } from "components/renderTableEl";
import { headerToDoColumn, headerStatColumn } from "assets/initData";

export const RenderTableHeader = ({ stat = "" }) => {
  return (
    <>
      <RenderTableEl header data={stat ? headerStatColumn : headerToDoColumn} />
    </>
  );
};
