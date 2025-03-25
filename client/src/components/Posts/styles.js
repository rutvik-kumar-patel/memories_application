import { styled } from '@mui/system';
import { deepPurple } from '@mui/material/colors';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Grid } from "@mui/material";

export const MainContainer = styled(Box)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
});

export const Heading = styled(Typography)({
  color: 'rgba(0,183,255, 1)',
  textDecoration: 'none',
});

export const Image = styled('img')({
  marginLeft: '15px',
});

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '400px',
});

export const Profile = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '400px',
});

export const UserName = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
});

export const BrandContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const Purple = styled(Box)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
  borderRadius: '50%',
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ActionDiv = styled(Box)({
  textAlign: 'center',
});

// Responsive styles using sx prop (instead of deprecated breakpoints)
export const ResponsiveAppBar = styled(AppBar)(({ theme }) => ({
  padding: '10px 50px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 20px',
  },
}));

export const ResponsiveHeading = styled(Heading)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const ResponsiveUserName = styled(UserName)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const ResponsiveToolbar = styled(StyledToolbar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '160px',
  },
}));
export const PostsContainer = styled(Grid)({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "16px",
  padding: "20px",
});
