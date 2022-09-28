import { RenderTableHeader } from "components/renderTableHeader";
import { RenderTableList } from "components/renderTableList";

export const RenderTable = ({ typeTab = "" }) => {
  return (
    <div className="mt-[40px]  space-y-3 ">
      {typeTab !== "arch" && <RenderTableHeader typeTab={typeTab} />}
      <div
        className={` space-y-3 ${
          typeTab === "todo"
            ? "h-[290px] overflow-hidden overflow-y-auto"
            : "h-[230px]"
        }`}
      >
        <RenderTableList typeTab={typeTab} />
      </div>
    </div>
  );
};
