import { styled } from "@mui/material/styles";
import { Paper, TextField, Button } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2),
}));

export const FormContainer = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
});

export const StyledTextField = styled(TextField)({
  width: "100%",
});

export const FileInput = styled("div")({
  width: "100%",
  margin: "10px 0",
});

export const SubmitButton = styled(Button)({
  marginBottom: "10px",
});
