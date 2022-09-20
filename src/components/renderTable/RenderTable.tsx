import { RenderTableHeader } from "components/renderTableHeader";
import { RenderTableList } from "components/renderTableList";
import { Box } from "@mui/system";
import {
  // tableContainer,
  // tableContainerStat,
  tableListToDo,
  tableListStat,
} from "styles/styledObj";

export const RenderTable = ({ stat = "" }) => {
  return (
    <>
      {/* <Box sx={{ ...tableContainer, ...(stat ? tableContainerStat : null) }}> */}
      <RenderTableHeader stat={stat} />
      <Box sx={{ ...(stat === "" ? tableListToDo : tableListStat) }}>
        <RenderTableList stat={stat} />
      </Box>
      {/* </Box> */}
    </>
  );
};
