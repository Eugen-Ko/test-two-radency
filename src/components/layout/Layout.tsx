import { ModalArch } from "components/modalArch";
import { ModalNewEdit } from "components/modalNewEdit";
import { RenderButton } from "components/renderButton";
import { RenderTable } from "components/renderTable";

export const Layout = () => {
  return (
    <>
      <RenderTable />
      <RenderButton text="Create Note" />
      <RenderTable stat={"stat"} />
      <ModalNewEdit />
      <ModalArch />
    </>
  );
};
