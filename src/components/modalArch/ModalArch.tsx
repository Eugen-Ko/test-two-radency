import { RenderButton } from "components/renderButton";
import { useAppSelector } from "hooks/redux";
import { useActions } from "hooks/action";
import { Fragment, useState } from "react";
import { useRenderTableList } from "hooks/hooks";
import { RenderTableEl } from "components/renderTableEl";
import { nanoid } from "nanoid";
import { Dialog, Transition } from "@headlessui/react";

export const ModalArch = () => {
  const { triggerModalArch, setCurrentCat } = useActions();

  const currentCat = useAppSelector((state) => state.todo.currentCat || null);

  const [open, setOpen] = useState(
    useAppSelector((state) => state.todo.isArch)
  );

  const currentList = useRenderTableList("arch");

  const handleClose = () => {
    setOpen(false);
    triggerModalArch();
    setCurrentCat(null);
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 bg-opacity-50 bg-dark"
          onClose={handleClose}
        >
          <div className="fixed inset-0 z-10 overflow-y-auto bg-opacity-50 bg-dark">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 w-full">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl m-4 ">
                <div className="bg-white p-4 sm:p-4">
                  <div className=" sm:flex sm:items-start flex-col">
                    <Dialog.Title
                      as="h3"
                      className="px-4 py-3 text-lg font-medium leading-6"
                    >
                      Archived records by {`${currentCat}`}
                    </Dialog.Title>
                    <div className="flex-col space-y-3 h-[286px] overflow-hidden overflow-y-auto">
                      {currentList.map((data, index) => {
                        return (
                          <RenderTableEl
                            header={false}
                            data={data}
                            typeTab={"todo"}
                            key={nanoid()}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-5 justify-between sm:flex sm:flex-row sm:justify-around sm:px-6 items-center">
                  <RenderButton text="Close" onClick={handleClose} />
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
