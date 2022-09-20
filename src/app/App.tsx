import { Layout } from "components/layout";
import { Box } from "@mui/material";
import { mainContainer } from "styles/styledObj";

export const App = () => {
  return (
    <Box sx={{ ...mainContainer }}>
      <Layout />
    </Box>
  );
};
