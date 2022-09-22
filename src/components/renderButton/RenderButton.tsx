import { Button } from "@mui/material";
import { createBtn } from "styles/styledObj";

export const RenderButton = ({
  text = "",
  onClick = (e: React.MouseEvent) => {},
}) => {
  return (
    <>
      <Button
        variant="contained"
        size="small"
        sx={{ ...createBtn }}
        onClick={(e) => onClick(e)}
      >
        {text}
      </Button>
    </>
  );
};
