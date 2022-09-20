import { Button } from "@mui/material";
import { createBtn } from "styles/styledObj";

export const RenderButton = ({ text = "" }) => {
  return (
    <>
      <Button variant="contained" size="small" sx={{ ...createBtn }}>
        {text}
      </Button>
    </>
  );
};
