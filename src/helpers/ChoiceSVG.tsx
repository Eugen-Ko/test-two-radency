import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";
import { headerSVG, listSVG, categorySVG } from "styles/styledObj";
import { theme } from "theme";

export const ChoiceSVG = ({ svg = "", header = false }): any => {
  const { secondary } = theme.palette;
  switch (svg) {
    case "archiveSVG":
      return (
        <IconButton
          sx={{ ...(header ? headerSVG : listSVG) }}
          aria-label="delete"
        >
          <ArchiveIcon />
        </IconButton>
      );
    case "unArchiveSVG":
      return (
        <IconButton aria-label="delete">
          <UnarchiveIcon sx={{ ...listSVG }} />
        </IconButton>
      );
    case "deleteSVG":
      return (
        <IconButton
          sx={{ ...(header ? headerSVG : listSVG) }}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      );
    case "editSVG":
      return (
        <IconButton sx={{ ...listSVG }} aria-label="delete">
          <EditIcon />
        </IconButton>
      );
    case "TaskSVG":
      return (
        <Box sx={{ ...categorySVG }}>
          <LocalGroceryStoreIcon sx={{ color: `${secondary.light}` }} />
        </Box>
      );
    case "Random ThoughtSVG":
      return (
        <Box sx={{ ...categorySVG }}>
          <PsychologyIcon sx={{ color: `${secondary.light}` }} />
        </Box>
      );
    case "IdeaSVG":
      return (
        <Box sx={{ ...categorySVG }}>
          <LightbulbIcon sx={{ color: `${secondary.light}` }} />
        </Box>
      );
    case "QuoteSVG":
      return (
        <Box sx={{ ...categorySVG }}>
          <FormatQuoteIcon sx={{ color: `${secondary.light}` }} />
        </Box>
      );
  }
};
