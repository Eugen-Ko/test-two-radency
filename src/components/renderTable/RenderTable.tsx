import { RenderTableHeader } from "components/renderTableHeader";
import { RenderTableList } from "components/renderTableList";
import { Box } from "@mui/system";
import { tableListToDo, tableListStat } from "styles/styledObj";

export const RenderTable = ({ typeTab = "" }) => {
  return (
    <>
      {typeTab !== "arch" && <RenderTableHeader typeTab={typeTab} />}
      <Box sx={{ ...(typeTab === "todo" ? tableListToDo : tableListStat) }}>
        <RenderTableList typeTab={typeTab} />
      </Box>
    </>
  );
};
