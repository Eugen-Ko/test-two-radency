import { dataSVG } from "assets/dataSVG";

export const CreateSVG = ({ nameSVG = "" }) => {
  let temp: string = "TaskSVG";
  switch (nameSVG) {
    case "archiveSVG":
      temp = dataSVG["archiveSVG"];
      break;
    case "editSVG":
      temp = dataSVG["editSVG"];
      break;
    case "deleteSVG":
      temp = dataSVG["deleteSVG"];
      break;
    case "unArchiveSVG":
      temp = dataSVG["unArchiveSVG"];
      break;
    case "TaskSVG":
      temp = dataSVG["TaskSVG"];
      break;
    case "Random ThoughtSVG":
      temp = dataSVG["Random ThoughtSVG"];
      break;
    case "IdeaSVG":
      temp = dataSVG["IdeaSVG"];
      break;
    case "QuoteSVG":
      temp = dataSVG["QuoteSVG"];
      break;
  }
  return (
    <svg viewBox="0 0 24 24" className="h-[24px] m-0">
      <path d={temp} />
    </svg>
  );
};
