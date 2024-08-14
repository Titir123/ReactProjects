import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

import Link from "next/link";

export default function Home() {
  return (
    <>
    <AppBar position="static" sx={{backgroundColor:"orangered"}}>
      <Toolbar>
       <img style={{display:{md:'flex'}, width:"30px", height:"30px"}}
       src="/Images/7191783.png"
       ></img>

        {/* Center Title */}
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h6" component="div" sx={{fontFamily:"fantasy", color:"white"}}>
            Clickshop
          </Typography>
          
        </Box>

        {/* Right Button */}
        
        <Link href="/auth/register"><Button variant="outlined" sx={{backgroundColor:"darkblue", color:"white"}}>Signup</Button></Link>
      </Toolbar>
    </AppBar>
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(/Images/istockphoto-1251629816-170667a.webp)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff', // Adjust text color as needed
      }}
    >
      <Typography variant="h2" component="h1" sx={{fontFamily:"fantasy", color:"skyblue"}}>
        Welcome to Clickshop
      </Typography>
      <Typography variant="h6" component="div" sx={{fontFamily:"fantasy", color:"darkblue"}}>
            Best solution to all your daily needs
          </Typography>
      <Link href="/auth/login"><Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 3 }}
      >
        Get Started
      </Button></Link>
    </Box>

    <footer>
            
            <Box sx={{ bgcolor: 'slategray', color:"whitesmoke", p: 6}} component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Site Links
                        </Typography>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Home
                        </Link>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Productlist
                        </Link>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Createdata
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Contact Us
                        </Link>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Privacy Policy
                        </Link>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Terms and Conditions
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Follow Us
                        </Typography>
                        <IconButton href="#" color="inherit">
                            <Facebook />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Twitter />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Instagram />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                </Grid>
               
            </Container>
        </Box>
        </footer>
    </>
  );
}