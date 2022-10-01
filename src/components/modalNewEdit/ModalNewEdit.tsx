import { useAppSelector } from "hooks/redux";
import { categories } from "assets/initData";
import { useActions } from "hooks/action";
import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import { checkExpDate } from "services/checkExpDate";
import { Transition, Dialog } from "@headlessui/react";
import { RenderButton } from "components/renderButton";

export const ModalNewEdit = () => {
  const { triggerModalNewEdit, addNewRecord, elementEdit, setCurrentEl } =
    useActions();
  const currentEl = useAppSelector((state) => state.todo.currentEl);
  const [open, setOpen] = useState(
    useAppSelector((state) => state.todo.isNewEdit)
  );
  const [currentName, setCurrentName] = useState(
    currentEl ? currentEl.name : ""
  );
  const [currentCategory, setCurrentCategory] = useState(
    currentEl ? currentEl.category : categories[0]
  );
  const [currentContent, setCurrentContent] = useState(
    currentEl ? currentEl.content : ""
  );
  const [currentDate, setCurrentDate] = useState(
    currentEl
      ? currentEl.expDate
        ? currentEl.expDate
        : checkExpDate(currentEl.content)
      : ""
  );

  const handleClose = () => {
    setOpen(false);
    triggerModalNewEdit();
    setCurrentEl(null);
  };

  const onClickSave = () => {
    const createRecord = {
      name: currentName,
      createDate: currentEl
        ? currentEl.createDate
        : new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
      category: currentCategory,
      content: currentContent,
      expDate: currentDate,
      isArch: false,
      id: currentEl ? currentEl.id : nanoid(),
    };
    if (!currentEl) addNewRecord(createRecord);
    else elementEdit(createRecord);
    handleClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "name":
        setCurrentName(event.target.value);
        break;
      case "content":
        setCurrentContent(event.target.value);
        break;
      case "expDate":
        setCurrentDate(event.target.value);
        break;
    }
  };

  const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(event.target.value);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 bg-opacity-50 bg-dark"
        onClose={handleClose}
      >
        <div className="fixed inset-0 z-10 overflow-y-auto bg-opacity-50 bg-dark">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
              <div className="bg-white p-4 sm:p-4">
                <div className=" sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-[100%]">
                    <Dialog.Title
                      as="h3"
                      className="px-4 text-lg font-medium leading-6"
                    >
                      {currentEl ? "Edit record" : "New record"}
                    </Dialog.Title>
                    <div className="mt-2">
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col max-w-md px-4 mx-auto"
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="Name task"
                          defaultValue={currentName}
                          onChange={handleChange}
                          className="block w-full px-3 py-2 text-gray-500 border rounded-md outline-none focus:bg-white focus:border-indigo-600 mb-[10px]"
                        />
                        <select
                          className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 mb-[10px]"
                          name="category"
                          defaultValue={currentCategory}
                          onChange={handlerSelect}
                        >
                          <option>Task</option>
                          <option>Random Thought</option>
                          <option>Idea</option>
                          <option>Quote</option>
                        </select>
                        <input
                          type="text"
                          name="content"
                          placeholder="Content"
                          defaultValue={currentContent}
                          onChange={handleChange}
                          className="block w-full px-3 py-2 text-gray-500 border rounded-md outline-none focus:bg-white focus:border-indigo-600 mb-[10px]"
                        />
                        <input
                          type="text"
                          name="expDate"
                          placeholder="Dates"
                          defaultValue={currentDate}
                          onChange={handleChange}
                          className="block w-full px-3 py-2 text-gray-500 border rounded-md outline-none focus:bg-white focus:border-indigo-600"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-5 justify-between sm:flex sm:flex-row sm:justify-around sm:px-6 items-center">
                <RenderButton text="Cancel" onClick={handleClose} />
                <RenderButton text="Save" onClick={onClickSave} />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
