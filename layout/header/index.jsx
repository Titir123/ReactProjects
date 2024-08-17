import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import { profile_pic } from '@/api/axios/axios';
import Link from 'next/link';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { logout } from '@/toolkit/authSlice';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img2 from '../../public/Images/e-commerce-logo-with-pointer-and-shopping-bag-free-vector.jpg'

const pages = ['Home', 'Productlist', 'CreateData'];
// const settings = ['Register'];

export default function Header() {
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const router = useRouter();
 
  const [anchorElNav, setAnchorElNav] = useState(null);
  //const [anchorElUser, setAnchorElUser] = useState(null);

  const [name, setName] = useState("");
  const [image, setImage] = useState();
 
  const token = cookie.get("token", {path:"/"});
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }
  
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  }

  useEffect(() => {
    const image = cookie.get("profile_pic", {path:"/"});
    const name = cookie.get("first_name", {path:"/"});
    setImage(image)
    setName(name);
  },[token]);
 
  return (

<AppBar position="static" sx={{ backgroundColor: 'orangered' }}>
  <Container maxWidth="xl">
    <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      
      {/* Mobile Menu Icon (Left for smaller screens) */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start',  }}>
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
         
         
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link href={`/cms/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit'  
         }}>
                  {page}
                </Link>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Icon and Clickshop (Left for larger screens) */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
        <IconButton sx={{ padding: 0, fontSize: { xs: 'inherit', md: 'inherit' }, display: { xs: 'none', md: 'flex' } }}>
        <ShoppingCartIcon/> 
        </IconButton>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'left', 
          }}
        >
          Clickshop
        </Typography>
      </Box>

      {/* Menu (Centered for larger screens) */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' ,
              '&:hover': {
                backgroundColor: 'slategrey',
                color:'blue',
              },
          
            }}
          >
            <Link href={`/cms/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'white' }}>
              {page}
            </Link>
          </Button>
        ))}
      </Box>

      {/* Profile and Logout (Right) */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.9rem' } }}>
          {name}
        </Typography>
        <Link href="/cms/profiledetail">
          <IconButton sx={{ padding: 0 }}>
            <img
              style={{
                width: "25px", 
                height: "25px",
                borderRadius: "50%",
              }}
              src={profile_pic(image)}
            />
          </IconButton>
        </Link>
        <IconButton
          onClick={handleLogout}
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem' },
            padding: 0,
          }}
        >
          <LogoutIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </Toolbar>
  </Container>
</AppBar>
  );
}


