import { RenderTableEl } from "components/renderTableEl";
import { headerTodo, headerStat } from "assets/initData";

export const RenderTableHeader = ({ typeTab = "" }) => {
  return (
    <>
      <RenderTableEl
        header
        data={typeTab === "todo" ? headerTodo : headerStat}
      />
    </>
  );
};
