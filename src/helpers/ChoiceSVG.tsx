// import ArchiveIcon from "@mui/icons-material/Archive";
// import UnarchiveIcon from "@mui/icons-material/Unarchive";
// import DeleteIcon from "@mui/icons-material/Delete";
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// import EditIcon from "@mui/icons-material/Edit";
// import { Box, IconButton } from "@mui/material";
// import { headerSVG, listSVG, categorySVG } from "styles/styledObj";
// import { theme } from "theme";
import { useActions } from "hooks/action";
import { useAppSelector } from "hooks/redux";
import { CreateSVG } from "./createSVG";

export const ChoiceSVG = ({
  svg = "TaskSVG",
  header = false,
  id = "",
}): any => {
  const {
    allArch,
    allActiveDel,
    elementArch,
    elementDel,
    elementUnArch,
    setCurrentEl,
    triggerModalNewEdit,
  } = useActions();
  const records = useAppSelector((state) => state.todo.todos);

  const onClickEdit = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    const currentRecord = records.find((record) => record.id === id) || null;
    setCurrentEl(currentRecord);
    triggerModalNewEdit();
  };

  const onClickArh = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    if (id === "headerTodo") {
      allArch();
      return;
    }
    elementArch(id);
  };

  const onClickDel = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    if (id === "headerTodo") {
      allActiveDel();
      return;
    }
    elementDel(id);
  };

  const onClickUnArh = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    console.log(id, "id");
    elementUnArch(id);
  };

  const onClickSwitcher = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    switch (svg) {
      case "archiveSVG":
        onClickArh(e, id);
        break;
      case "editSVG":
        onClickEdit(e, id);
        break;
      case "deleteSVG":
        onClickDel(e, id);
        break;
      case "unArchiveSVG":
        onClickUnArh(e, id);
        break;
    }
  };

  const styleSVG =
    "h-[40px] rounded-[50%] items-center shadow-md transition-all flex item-center justify-center";
  const headerSVG = "fill-white";
  const hoverHeaderSVG = "hover:bg-white hover:fill-dark";
  const listSVG = "fill-dark";
  const hoverListSVG = "hover:bg-dark hover:fill-white";

  if (["archiveSVG", "unArchiveSVG", "deleteSVG", "editSVG"].includes(svg)) {
    return (
      <button
        className={`${styleSVG} ${
          header
            ? [headerSVG, hoverHeaderSVG].join(" ")
            : [listSVG, hoverListSVG].join(" ")
        }`}
        aria-label={svg}
        onClick={(e) => onClickSwitcher(e, id)}
      >
        <CreateSVG nameSVG={svg} />
      </button>
    );
  }

  if (["TaskSVG", "Random ThoughtSVG", "IdeaSVG", "QuoteSVG"].includes(svg)) {
    return (
      <div className={`${styleSVG} bg-text fill-white`} aria-label={svg}>
        <CreateSVG nameSVG={svg} />
      </div>
    );
  }

  // switch (svg) {
  //   case "archiveSVG":
  //     return (
  //       <button
  //         className={`${styleSVG} ${
  //           header
  //             ? [headerSVG, hoverHeaderSVG].join(" ")
  //             : [listSVG, hoverListSVG].join(" ")
  //         }`}
  //         aria-label="archive"
  //         onClick={(e) => onClickArh(e, id)}
  //       >
  //         <CreateSVG nameSVG={svg} />
  //       </button>
  //     );
  //   case "unArchiveSVG":
  //     return (
  //       <IconButton
  //         // sx={{ ...listSVG }}
  //         aria-label="unArchive"
  //         onClick={(e) => onClickUnArh(e, id)}
  //       >
  //         <UnarchiveIcon />
  //       </IconButton>
  //     );
  //   case "deleteSVG":
  //     return (
  //       <IconButton
  //         // sx={{ ...(header ? headerSVG : listSVG) }}
  //         aria-label="delete"
  //         onClick={(e) => onClickDel(e, id)}
  //       >
  //         <DeleteIcon />
  //       </IconButton>
  //     );
  //   case "editSVG":
  //     return (
  //       <IconButton
  //         // sx={{ ...listSVG }}
  //         aria-label="edit"
  //         onClick={(e) => onClickEdit(e, id)}
  //       >
  //         <EditIcon />
  //       </IconButton>
  //     );
  //   case "TaskSVG":
  //     return (
  //       <Box sx={{ ...categorySVG }}>
  //         <LocalGroceryStoreIcon sx={{ color: `${secondary.light}` }} />
  //       </Box>
  //     );
  //   case "Random ThoughtSVG":
  //     return (
  //       <Box sx={{ ...categorySVG }}>
  //         <PsychologyIcon sx={{ color: `${secondary.light}` }} />
  //       </Box>
  //     );
  //   case "IdeaSVG":
  //     return (
  //       <Box sx={{ ...categorySVG }}>
  //         <LightbulbIcon sx={{ color: `${secondary.light}` }} />
  //       </Box>
  //     );
  //   case "QuoteSVG":
  //     return (
  //       <Box sx={{ ...categorySVG }}>
  //         <FormatQuoteIcon sx={{ color: `${secondary.light}` }} />
  //       </Box>
  //     );
  // }
};
