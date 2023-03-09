import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { fontFamily, shadows } from "@mui/system";

const settings = ['ชำระเงิน', 'สถานะการสมัคร', 'ประวัติการสมัคร', 'ออกจากระบบ'];

function Appbar() {
  interface Props {
    handleLogin: () => void;
    loggedIn: boolean;
    handleLogout: () => void;
    loggedOut: boolean;
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const img = require('../image/Activity.png');
  const [activeLink, setActiveLink] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedOut(false);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const clickedLink = event.currentTarget;
    const clickedLinkText = clickedLink.textContent || "";
    setActiveLink(clickedLinkText);
  };

  const getUserData = () => {
    const stringfiedUser = localStorage.getItem("user") || "";
    if (stringfiedUser) {
      return JSON.parse(stringfiedUser);
    }
    return false;
  }

  const user = getUserData()

  useEffect(() => {
    const links = document.querySelectorAll(".home-navlink");
    links.forEach((link) => {
      const linkText = link.textContent || "";
      if (linkText === activeLink) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [activeLink]);


  return (
    <AppBar position="static" style={{ backgroundColor: "#1F8AE3"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {!user && (
            <Link to="/login">
              <Button color="inherit"
                onClick={handleLogin}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '10px',
                  color: 'white',
                  fontSize: '18px',
                  fontFamily: 'cursive'
                }}
              >
                เข้าสู่ระบบ
              </Button>
            </Link>
          )}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={img} style={{ width: '90px', height: '70px', position: 'relative', top: '5px' }} />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={img} style={{ width: '80px', height: '70px', position: 'relative', top: '5px' }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block'}}
            >
            </Button>
          </Box>
          {user && (
            <Box sx={{ flexGrow: 0 }} onClick={handleLogout}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                  <Avatar alt="Remy Sharp" src="../image/Activity.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <Link
                    to={setting === "ออกจากระบบ" ? "/logout" : setting === "ชำระเงิน" ? "/payment" : setting === "สถานะการสมัคร" ? "/status" : "/activityhistory"}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" sx={{ color: 'black' }}>{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;