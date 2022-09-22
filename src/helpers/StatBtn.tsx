import { Button } from "@mui/material";
import { useActions } from "hooks/action";
import { createBtnStat } from "styles/styledObj";

export const StatBtn = ({ el = "", id = "" }) => {
  const { triggerModalArch, setCurrentCat } = useActions();

  const onClickStatArch = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    triggerModalArch();
    setCurrentCat(id);
  };

  return (
    <Button
      variant="contained"
      size="small"
      sx={{ ...createBtnStat }}
      disabled={Number(el) ? false : true}
      onClick={(e) => onClickStatArch(e, id)}
    >
      {el}
    </Button>
  );
};
