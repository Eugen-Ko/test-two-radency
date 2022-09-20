import { nanoid } from "nanoid";
import { Typography } from "@mui/material";
import { headerText, listSVG, listTitle } from "styles/styledObj";

export const TextInElement = ({ header = false, index = 0, el = "" }) => {
  return (
    <Typography
      sx={{
        ...(header ? headerText : index !== 1 ? listSVG : listTitle),
      }}
      key={nanoid()}
    >
      {el}
    </Typography>
  );
};
