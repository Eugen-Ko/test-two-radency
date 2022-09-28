// import { Button } from "@mui/material";
import { useActions } from "hooks/action";
// import { createBtnStat } from "styles/styledObj";

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
    <button
      className="px-3 py-1 shadow text-sm text-dark duration-150 rounded-md hover:bg-dark hover:text-white"
      // variant="contained"
      // size="small"
      // sx={{ ...createBtnStat }}
      disabled={Number(el) ? false : true}
      onClick={(e) => onClickStatArch(e, id)}
    >
      {el}
    </button>
  );
};
