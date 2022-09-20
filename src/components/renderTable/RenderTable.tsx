import { RenderTableHeader } from "components/renderTableHeader";
import { RenderTableList } from "components/renderTableList";
import { Box } from "@mui/system";
import { tableListToDo, tableListStat } from "styles/styledObj";

export const RenderTable = ({ stat = "" }) => {
  return (
    <>
      <RenderTableHeader stat={stat} />
      <Box sx={{ ...(stat === "" ? tableListToDo : tableListStat) }}>
        <RenderTableList stat={stat} />
      </Box>
    </>
  );
};
