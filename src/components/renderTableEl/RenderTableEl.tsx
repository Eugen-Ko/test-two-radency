// import { Box } from "@mui/material";
// import { tableElement, headerStyle, elStyle } from "styles/styledObj";
import { ChoiceSVG } from "helpers/ChoiceSVG";
import { nanoid } from "nanoid";
import { StatBtn } from "helpers/StatBtn";
import { TextInElement } from "helpers/TextInElement";

export const RenderTableEl = ({
  header = false,
  typeTab = "",
  data = { data: [""], id: "" },
}) => {
  return (
    <div
      className={header ? "shadow rounded-md bg-dark text-white" : "bg-light"}
    >
      <div
        className="w-100 h-40px px-3 py-1 grid grid-cols-[40px_3fr_2fr_2fr_3fr_2fr_40px_40px_40px] grid-rows-[40px] gap-x-3 items-center"
        key={nanoid()}
      >
        {data?.data.map((el, index) => {
          return el.includes("SVG") ? (
            <ChoiceSVG svg={el} key={nanoid()} header={header} id={data.id} />
          ) : index === 5 && !header && typeTab === "stat" ? (
            <StatBtn el={el} key={nanoid()} id={data.id} />
          ) : (
            <TextInElement
              header={header}
              index={index}
              el={el}
              key={nanoid()}
            />
          );
        })}
      </div>
    </div>
  );
};

// export const tableElement = {
//   width: "calc(100% - 24px)",
//   height: "40px",
//   padding: "5px 12px",
//   margin: "0px auto 10px auto",
//   display: "grid",
//   gridTemplateColumns: "40px 3fr 2fr 2fr 3fr 2fr 40px 40px 40px",
//   gridTemplateRows: "40px",
//   columnGap: "12px",
//   alignItems: "center",
// };

// export const headerStyle = {
//   marginTop: "40px",
//   boxShadow: "0 0 5px rgba(0, 0, 0, 0.2) inset",
//   borderRadius: "5px",
//   backgroundColor: `${primary.dark}`,
// };

// export const elStyle = {
//   backgroundColor: `${primary.light}`,
// };
