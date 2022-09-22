import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RenderButton } from "components/renderButton";
import { useAppSelector } from "hooks/redux";
import { categories } from "assets/initData";
import { MenuItem, TextField } from "@mui/material";
import { useActions } from "hooks/action";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { checkExpDate } from "services/checkExpDate";
import { styleModalNewEdit } from "styles/styledObj";

export const ModalNewEdit = () => {
  const { triggerModalNewEdit, addNewRecord } = useActions();
  const currentEl = useAppSelector((state) => state.todo.currentEl || null);
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
    handleClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "name":
        setCurrentName(event.target.value);
        break;
      case "category":
        setCurrentCategory(event.target.value);
        break;

      case "content":
        setCurrentContent(event.target.value);
        break;

      case "expDate":
        setCurrentDate(event.target.value);
        break;
    }
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
            name="name"
            label="Name"
            defaultValue={currentName}
            variant="standard"
            sx={{ marginBottom: "10px" }}
            onChange={handleChange}
          />
          <TextField
            id="standard-select-currency"
            name="category"
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
            name="content"
            label="Content"
            variant="standard"
            defaultValue={currentContent}
            onChange={handleChange}
          />
          <TextField
            name="expDate"
            label="Dates"
            variant="standard"
            defaultValue={currentDate}
            onChange={handleChange}
          />
          <Box
            sx={{
              mt: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <RenderButton onClick={handleClose} text="Cancel" />
            <RenderButton onClick={onClickSave} text="Save" />
          </Box>
        </Box>
      </Modal>
    </>
  );
};
