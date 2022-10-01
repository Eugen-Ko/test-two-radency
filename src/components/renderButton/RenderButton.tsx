export const RenderButton = ({
  text = "",
  onClick = (e: React.MouseEvent) => {},
}) => {
  return (
    <button
      className="h-[40px]  w-[140px] px-3 py-1 shadow text-sm text-dark duration-150 rounded-md hover:bg-dark hover:text-white border border-solid border-gray-50"
      type={text === "Save" ? "submit" : "button"}
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
};
