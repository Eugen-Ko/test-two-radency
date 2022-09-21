import { Layout } from "components/layout";
import { Box } from "@mui/material";
import { mainContainer } from "styles/styledObj";
import { init } from "services/init";

export const App = () => {
  init();
  return (
    <Box sx={{ ...mainContainer }}>
      <Layout />
    </Box>
  );
};
