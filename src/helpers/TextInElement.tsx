import { nanoid } from "nanoid";

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
