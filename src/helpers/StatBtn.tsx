import { Button } from "@mui/material";
import { createBtnStat } from "styles/styledObj";

export const StatBtn = ({ el = "" }) => {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{ ...createBtnStat }}
      disabled={Number(el) ? false : true}
    >
      {el}
    </Button>
  );
};
