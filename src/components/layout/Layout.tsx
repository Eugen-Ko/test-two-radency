import { ModalArch } from "components/modalArch";
import { ModalNewEdit } from "components/modalNewEdit";
import { RenderButton } from "components/renderButton";
import { RenderTable } from "components/renderTable";
import { useActions } from "hooks/action";
import { useAppSelector } from "hooks/redux";
import { useEffect, useState } from "react";

export const Layout = () => {
  const isNewEdit = useAppSelector((state) => state.todo.isNewEdit);
  const isArch = useAppSelector((state) => state.todo.isArch);
  const [isModalNewEdit, setIsModalNewEdit] = useState(isNewEdit);
  const [isModalArch, setIsModalArch] = useState(isArch);
  const { triggerModalNewEdit } = useActions();

  useEffect(() => {
    setIsModalNewEdit(isNewEdit);
  }, [isNewEdit]);

  useEffect(() => {
    setIsModalArch(isArch);
  }, [isArch]);

  return (
    <>
      <RenderTable typeTab="todo" />
      <RenderButton
        onClick={() => {
          triggerModalNewEdit();
        }}
        text="Create Note"
      />
      <RenderTable typeTab="stat" />
      {isModalNewEdit && <ModalNewEdit />}
      {isModalArch && <ModalArch />}
    </>
  );
};
