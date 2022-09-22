import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RenderButton } from "components/renderButton";
import { useAppSelector } from "hooks/redux";
import { useActions } from "hooks/action";
import { useState } from "react";
import {
  styleModalArch,
  styleModalNewEdit,
  tableListToDo,
} from "styles/styledObj";
import { useRenderTableList } from "hooks/hooks";
import { RenderTableEl } from "components/renderTableEl";
import { nanoid } from "nanoid";

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...styleModalNewEdit, ...styleModalArch }}>
          <Typography component="h2">
            Archived records by {`${currentCat}`}
          </Typography>
          <Box sx={{ ...tableListToDo, margin: "15px 0 10px 0" }}>
            {currentList.map((data, index) => {
              return (
                <RenderTableEl
                  header={false}
                  data={data}
                  lastEl={index === currentList.length - 1 ? true : false}
                  typeTab={"todo"}
                  key={nanoid()}
                />
              );
            })}
          </Box>
          <Box
            sx={{
              mt: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <RenderButton onClick={handleClose} text="Close" />
          </Box>
        </Box>
      </Modal>
    </>
  );
};
