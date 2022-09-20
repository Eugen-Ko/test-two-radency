import { Box } from "@mui/material";
import { tableElement, headerStyle, elStyle } from "styles/styledObj";
import { ChoiceSVG } from "helpers/ChoiceSVG";
import { nanoid } from "nanoid";
import { StatBtn } from "helpers/StatBtn";
import { TextInElement } from "helpers/TextInElement";

export const RenderTableEl = ({
  stat = "",
  header = false,
  data = [""],
  lastChild = false,
}) => {
  console.log(!header, stat);

  return (
    <Box
      sx={{
        ...tableElement,
        ...(header ? headerStyle : elStyle),
        marginBottom: lastChild ? "0" : "10px",
      }}
      key={nanoid()}
    >
      {data.map((el, index) => {
        return el.includes("SVG") ? (
          <ChoiceSVG svg={el} key={nanoid()} header={header} />
        ) : index === 5 && !header && stat === "stat" ? (
          <StatBtn el={el} />
        ) : (
          <TextInElement header={header} index={index} el={el} />
        );
      })}
    </Box>
  );
};
