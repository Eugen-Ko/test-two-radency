import { RenderTableHeader } from "components/renderTableHeader";
import { RenderTableList } from "components/renderTableList";
// import { Box } from "@mui/system";
// import { tableListToDo, tableListStat } from "styles/styledObj";

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

// export const tableListToDo = {
//   height: "290px",
//   marginBottom: "20px",
//   overflow: "hidden",
//   overflowY: "auto",
// };

// export const tableListStat = {
//   height: "230px",
// };
