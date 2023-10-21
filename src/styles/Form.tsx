import { FormControl, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { MainTitle } from "./Title";

export const FormTextField = styled(TextField)({
  margin: "10px",
});

export const FormTitle = styled(MainTitle)({
  margin: "30px",
  textAlign: "center",
});

export const CenterWideFormControl = styled(FormControl)({
  width: "100%",
  textAlign: "center",
});

export const CenterShortFormControl = styled(FormControl)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});
