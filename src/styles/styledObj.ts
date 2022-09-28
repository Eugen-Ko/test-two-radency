import { theme } from "theme";

const { primary, secondary } = theme.palette;

// export const mainContainer = {
//   maxWidth: "1048px",
//   margin: "0 auto 0 auto",
//   padding: "0 12px",
//   display: "flex",
//   flexDirection: "column",
//   overflow: "hidden",
//   justifyItem: "right",
// };

// export const tableListToDo = {
// height: "290px",
// marginBottom: "20px",
// overflow: "hidden",
// overflowY: "auto",
// };

// export const tableListStat = {
//   height: "230px",
// };

// export const tableElement = {
//   width: "calc(100% - 24px)",
//   height: "40px",
//   padding: "5px 12px",
//   margin: "0px auto 10px auto",
//   display: "grid",
//   gridTemplateColumns: "40px 3fr 2fr 2fr 3fr 2fr 40px 40px 40px",
//   gridTemplateRows: "40px",
//   columnGap: "12px",
//   alignItems: "center",
// };

// export const headerStyle = {
//   marginTop: "40px",
//   boxShadow: "0 0 5px rgba(0, 0, 0, 0.2) inset",
//   borderRadius: "5px",
//   backgroundColor: `${primary.dark}`,
// };

// export const elStyle = {
//   backgroundColor: `${primary.light}`,
// };

// export const headerText = {
//   color: `${secondary.light}`,
//   fontWeight: "bold",
//   overflow: "hidden",
//   whiteSpace: "nowrap",
//   textOverflow: "ellipsis",
// };

export const headerSVG = {
  color: `${secondary.light}`,
};

const list = {
  fontSize: "14px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

export const listSVG = {
  ...list,
  color: `${primary.dark}`,
};

// export const listTitle = {
//   ...list,
//   color: `${secondary.main}`,
// };

export const createBtn = {
  margin: "0",
  width: "140px",
  alignSelf: "end",
  color: `${secondary.dark}`,
};

// export const createBtnStat = {
//   ...createBtn,
//   width: "40px",
//   alignSelf: "center",
// };

// export const categorySVG = {
//   height: "100%",
//   borderRadius: "50%",
//   backgroundColor: `${secondary.main}`,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

export const styleModalNewEdit = {
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

export const styleModalArch = {
  width: "80%",
};
