import { styled } from "@mui/material/styles";
import { Card, CardMedia, CardActions, Box, Typography } from "@mui/material";

export const PostCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
  boxShadow: theme.shadows[3],
  transition: "0.3s",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
}));

export const Media = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%", // 16:9 aspect ratio
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
});

export const Overlay = styled(Box)({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
});

export const Overlay2 = styled(Box)({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
});

export const GridContainer = styled(Box)({
  display: "flex",
});

export const Details = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
});

export const Title = styled(Typography)({
  padding: "0 16px",
  fontWeight: "bold",
});

export const CardActionsContainer = styled(CardActions)({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});
