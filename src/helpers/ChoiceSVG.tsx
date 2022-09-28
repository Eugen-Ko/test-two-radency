import { useActions } from "hooks/action";
import { useAppSelector } from "hooks/redux";
import { CreateSVG } from "./createSVG";

export const ChoiceSVG = ({
  svg = "TaskSVG",
  header = false,
  id = "",
}): any => {
  const {
    allArch,
    allActiveDel,
    elementArch,
    elementDel,
    elementUnArch,
    setCurrentEl,
    triggerModalNewEdit,
  } = useActions();
  const records = useAppSelector((state) => state.todo.todos);

  const onClickEdit = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    const currentRecord = records.find((record) => record.id === id) || null;
    setCurrentEl(currentRecord);
    triggerModalNewEdit();
  };

  const onClickArh = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    if (id === "headerTodo") {
      allArch();
      return;
    }
    elementArch(id);
  };

  const onClickDel = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    if (id === "headerTodo") {
      allActiveDel();
      return;
    }
    elementDel(id);
  };

  const onClickUnArh = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    console.log(id, "id");
    elementUnArch(id);
  };

  const onClickSwitcher = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    switch (svg) {
      case "archiveSVG":
        onClickArh(e, id);
        break;
      case "editSVG":
        onClickEdit(e, id);
        break;
      case "deleteSVG":
        onClickDel(e, id);
        break;
      case "unArchiveSVG":
        onClickUnArh(e, id);
        break;
    }
  };

  const styleSVG =
    "h-[40px] rounded-[50%] items-center shadow-md transition-all flex item-center justify-center";
  const headerSVG = "fill-white";
  const hoverHeaderSVG = "hover:bg-white hover:fill-dark";
  const listSVG = "fill-dark";
  const hoverListSVG = "hover:bg-dark hover:fill-white";

  if (["archiveSVG", "unArchiveSVG", "deleteSVG", "editSVG"].includes(svg)) {
    return (
      <button
        className={`${styleSVG} ${
          header
            ? [headerSVG, hoverHeaderSVG].join(" ")
            : [listSVG, hoverListSVG].join(" ")
        }`}
        aria-label={svg}
        onClick={(e) => onClickSwitcher(e, id)}
      >
        <CreateSVG nameSVG={svg} />
      </button>
    );
  }

  if (["TaskSVG", "Random ThoughtSVG", "IdeaSVG", "QuoteSVG"].includes(svg)) {
    return (
      <div className={`${styleSVG} bg-text fill-white`} aria-label={svg}>
        <CreateSVG nameSVG={svg} />
      </div>
    );
  }
};
