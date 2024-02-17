import { FormControl, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { MainTitle } from "./Title";

export const FormTextField = styled(TextField)({
  margin: "0.625rem",
});

export const FormTitle = styled(MainTitle)({
  margin: "1.875rem",
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
  gap: "0.625rem",
});
