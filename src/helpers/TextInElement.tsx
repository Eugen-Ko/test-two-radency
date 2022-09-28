import { nanoid } from "nanoid";
// import { Typography } from "@mui/material";
// import { headerText, listSVG, listTitle } from "styles/styledObj";

export const TextInElement = ({ header = false, index = 0, el = "" }) => {
  const overflow = "overflow-hidden whitespace-nowrap text-ellipsis";
  const headerText = "color-white font-bold";
  const list = "text-[14px] font-normal";
  const listTitle = list + " text-text";
  const listPlain = list + " text-dark";
  return (
    <p
      className={`${overflow} ${
        header ? headerText : index === 1 ? listTitle : listPlain
      } `}
      key={nanoid()}
    >
      {el}
    </p>
  );
};

// export const headerText = {
//   color: `${secondary.light}`,
//   fontWeight: "bold",
//   overflow: "hidden",
//   whiteSpace: "nowrap",
//   textOverflow: "ellipsis",
// };

// const list = {
//   fontSize: "14px",
//   overflow: "hidden",
//   whiteSpace: "nowrap",
//   textOverflow: "ellipsis",
// };

// export const listSVG = {
//   ...list,
//   color: `${primary.dark}`,
// };

// export const listTitle = {
//   ...list,
//   color: `${secondary.main}`,
// };
