import { Box } from "@mui/material";
import { tableElement, headerStyle, elStyle } from "styles/styledObj";
import { ChoiceSVG } from "helpers/ChoiceSVG";
import { nanoid } from "nanoid";
import { StatBtn } from "helpers/StatBtn";
import { TextInElement } from "helpers/TextInElement";

export const RenderTableEl = ({
  header = false,
  lastEl = false,
  typeTab = "",
  data = { data: [""], id: "" },
}) => {
  return (
    <Box
      sx={{
        ...tableElement,
        ...(header ? headerStyle : elStyle),
        marginBottom: lastEl ? "0" : "10px",
      }}
      key={nanoid()}
    >
      {data?.data.map((el, index) => {
        return el.includes("SVG") ? (
          <ChoiceSVG svg={el} key={nanoid()} header={header} id={data.id} />
        ) : index === 5 && !header && typeTab === "stat" ? (
          <StatBtn el={el} key={nanoid()} id={data.id} />
        ) : (
          <TextInElement header={header} index={index} el={el} key={nanoid()} />
        );
      })}
    </Box>
  );
};
