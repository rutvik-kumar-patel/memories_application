import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import memories from "../../images/memories.png";
import * as actionType from "../../constants/actionTypes";
import {
  StyledAppBar,
  Heading,
  Image,
  StyledToolbar,
  ProfileContainer,
  UserName,
  BrandContainer,
  PurpleAvatar,
} from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const location = useLocation();
  let navigate = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <StyledAppBar position="static" color="inherit">
      <BrandContainer>
        <Heading component={Link} to="/" variant="h4">
          Memories
        </Heading>
        <Image src={memories} alt="icon" height="60" />
      </BrandContainer>
      <StyledToolbar>
        {user?.result ? (
          <ProfileContainer>
            <PurpleAvatar
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </PurpleAvatar>
            <UserName variant="h6">{user?.result.name}</UserName>
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          </ProfileContainer>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">
            Sign In
          </Button>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
