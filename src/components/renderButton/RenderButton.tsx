import { Button } from "@mui/material";
import { createBtn } from "styles/styledObj";

export const RenderButton = ({
  text = "",
  onClick = (e: React.MouseEvent) => {},
}) => {
  return (
    <>
      <Button
        type={text === "Save" ? "submit" : "button"}
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
