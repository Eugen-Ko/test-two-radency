import { Layout } from "components/layout";
// import { Box } from "@mui/material";
// import { mainContainer } from "styles/styledObj";
import { init } from "services/init";

export const App = () => {
  init();
  return (
    // export const mainContainer = {
    //   maxWidth: "1048px",
    //   margin: "0 auto 0 auto",
    //   padding: "0 12px",
    //   display: "flex",
    //   flexDirection: "column",
    //   overflow: "hidden",
    //   justifyItem: "right",
    // };

    <div className="container max-w-5xl flex flex-col justify-item-end overflow-hidden">
      <Layout />
    </div>
  );
};
