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
    // <button>Title</button>
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
