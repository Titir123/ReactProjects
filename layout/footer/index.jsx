import Link from "next/link";
import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer>
            
            <Box sx={{ bgcolor: 'slategrey', color:"whitesmoke", p: 6}} component="footer">
            <Box sx={{ display:"flex", alignItems:"center", flexDirection:"column",
            justifyContent:"center"}}>
              <img style={{display:{md:'flex'}, width:"30px", height:"30px", 
          }}
       src="/Images/7191783.png"
       ></img>
      
          <Typography variant="h6" component="div" sx={{fontFamily:"fantasy", color:"white"}}>
            Clickshop
          </Typography>
          </Box>
        <br/>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Site Links
                        </Typography>
                        <Link href="/cms/home" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Home
                        </Link>
                        <Link href="/cms/productlist" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Products
                        </Link>
                        <Link href="/cms/createdata" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Add products
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
    );
};

export default Footer;