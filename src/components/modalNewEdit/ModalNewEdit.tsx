import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RenderButton } from "components/renderButton";
import { useAppSelector } from "hooks/redux";
import { categories } from "assets/initData";
import { MenuItem, TextField } from "@mui/material";
import { useActions } from "hooks/action";
import { useState } from "react";

const styleModalNewEdit = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export const ModalNewEdit = () => {
  const { triggerModalNewEdit } = useActions();
  const currentEl = useAppSelector((state) => state.todo.currentEl);
  const [open, setOpen] = useState(
    useAppSelector((state) => state.todo.isNewEdit)
  );

  const [currentCategory, setCurrentCategory] = useState(
    currentEl ? currentEl.category : categories[0]
  );

  const handleClose = () => {
    setOpen(false);
    triggerModalNewEdit();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCategory(event.target.value);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...styleModalNewEdit }}>
          <Typography component="h2">
            {currentEl ? "Edit record" : "New record"}
          </Typography>
          <TextField
            InputLabelProps={{ style: { color: "grey" } }}
            inputProps={{
              style: { color: "#212121" },
            }}
            label="Name"
            defaultValue={currentEl ? currentEl.name : ""}
            variant="standard"
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            value={currentCategory}
            helperText="Please select category"
            variant="standard"
            onChange={handleChange}
            InputLabelProps={{ style: { color: "grey" } }}
            inputProps={{
              style: { color: "#212121" },
            }}
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Content"
            variant="standard"
            defaultValue={currentEl ? currentEl.content : ""}
          />
          <TextField
            label="Dates"
            variant="standard"
            defaultValue={currentEl ? currentEl.expDate : ""}
          />
          <Box
            sx={{ mt: "20px", display: "flex", justifyContent: "space-around" }}
          >
            <RenderButton text="Cancel" />
            <RenderButton text="Save" />
          </Box>
        </Box>
      </Modal>
    </>
  );
};
