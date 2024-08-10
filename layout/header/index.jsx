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
import img1 from '../../public/Images/user_10387432.png'
import { profile_pic } from '@/api/axios/axios';
import Link from 'next/link';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { logout } from '@/toolkit/authSlice';
import Image from 'next/image';

const pages = ['Productlist', 'CreateData', 'ProfileDetail'];
const settings = ['Register'];

export default function Header() {
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const router = useRouter();
 
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [name, setName] = useState("");
  const [image, setImage] = useState();
 
  const token = cookie.get("token", {path:"/"});
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }
  
  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
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
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: { lg: 'flex', md: 'flex', xs:'none' } }}>
    
        {/* <img style={{width:"100px", height:"80px",display:{xs:'none', md:'flex'}}} src={img1} alt="" />  */}
        
          <Typography
            variant="h4"
            noWrap
            style={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 300,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              // marginTop:"30px"
            }}
          >
           
             UniTech
          </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                    <Link href={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                      Home
                    </Link>
                  </Typography>
              </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                 
                  <Typography textAlign="center">
                    <Link href={`/cms/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { lg: 'none', md: 'none', xs:'block' } }}>
          {/* <img style={{width:"130px", height:"100px"}} src={img1} alt="" /> */}
          </Box>
          <Typography
            variant="h5"
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
            UniTech
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                    <Link href={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                      HOME
                    </Link>
                    </Button>
                  </Typography>
              </MenuItem>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link href={`/cms/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'white' }}>
                  {page}
                </Link>
             
              </Button>
            ))}
          </Box>

          <MenuItem>  
           {name} 
          </MenuItem>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {token !== null && token !== undefined ? (<img style={{width:"30px", height:"30px", borderRadius:"100%"}} src={profile_pic(image)}/>) : (<Image width={30} height={30} borderRadius={100} src= {img1}/>)}
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
              <MenuItem onClick={handleLogout}>
                
                {token!==null && token !==undefined ? (
                  <>
                <Typography textAlign="center">Logout</Typography>
              
                </>
                )
                : 
                (
                  <>
                  <Typography textAlign="center" >
                    <Link href={`/auth/login`} style={{ textDecoration: 'none', color: 'inherit' }}> Login</Link>
                  </Typography>
                
               </>
                )
                }
            </MenuItem>
                 {settings?.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"> <Link href={`/auth/${setting.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {setting}
                    </Link>
                  </Typography>
                  
                </MenuItem>
              ))}

            </Menu>
           
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}


