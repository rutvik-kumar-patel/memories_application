import { styled } from "@mui/material/styles";
import { AppBar, Typography, Toolbar, Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

// ✅ Styled Components for MUI v5
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 50px",
}));

export const Heading = styled(Typography)({
  color: "rgba(0,183,255, 1)",
  textDecoration: "none",
});

export const Image = styled("img")({
  marginLeft: "15px",
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-end",
  width: "400px",
});

export const ProfileContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "350px",
});

export const UserName = styled(Typography)({
  display: "flex",
  alignItems: "center",
});

export const BrandContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const PurpleAvatar = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
}));
