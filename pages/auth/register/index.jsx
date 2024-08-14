import React, { useState } from 'react'
import { TextField, Button, Container, Paper, Grid, Typography, AppBar, Box, Toolbar, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSignUpMutation } from '@/hooks/customHooks/authQuery.hooks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';



export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useSignUpMutation();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profile_pic", data.profile_pic[0]);
    mutate(formData);
  };
  return (
    <>
    <AppBar position="static"  sx={{backgroundColor:"orangered"}}>
      <Toolbar>
      <IconButton sx={{ padding: 0, fontSize: { xs: 'inherit', md: 'inherit' }, display: { md: 'flex' } }}>
        <ShoppingCartIcon/> 
        </IconButton> 

        {/* Center Title */}
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h6" component="div" sx={{fontFamily:"fantasy", color:"white"}}>
            Clickshop
          </Typography>
        </Box>

        {/* Right Button */}

        <Link href="/auth/login"><Button variant="outlined" sx={{backgroundColor:"darkblue", color:"white"}}>Login</Button></Link>
      </Toolbar>
    </AppBar>

    <div style= {{background: "linear-gradient(to right, #87CEEB, #4682B4)"}}>
    <Container>
       <br /> <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              User Registration
            </Typography>
            <form>
            <TextField
                {...register("first_name", {
                  required: "Firstname is required",
                })}
                label="Your FirstName"
                fullWidth
                margin="normal"
                variant="outlined"
                error={errors.first_name}
                helperText={errors.first_name && errors.first_name.message}
              />
                <TextField
                {...register("last_name", {
                  required: "Lastname is required",
                })}
                label="Your LastName"
                fullWidth
                margin="normal"
                variant="outlined"
                error={errors.last_name}
                helperText={errors.last_name && errors.last_name.message}
              />
              <TextField
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email format",
                  },
                })}
                label="Your Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={errors.email}
                helperText={errors.email && errors.email.message}
              />
              <TextField
                {...register("password", { required: true })}
                label="password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                error={!!errors.password}
                helperText={errors.password && "Password is required"}
              />

<TextField
                {...register("profile_pic", { required: true, maxLength: 20 })}
                fullWidth
                margin="normal"
                variant="outlined"
                type="file"
                error={!!errors.profile_pic}
                helperText={errors.profile_pic && "Profile pic is required"}
              />
{isPending ? <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                sx={{ marginTop: 2 }}
              >
                Loading
              </Button> :
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                sx={{ marginTop: 2 }}
              >
                Register
              </Button>}
            </form>
          </Paper>
        </Grid>
      </Grid>
       <br /> <br />
    </Container>
    </div>
    <footer>
            
            <Box sx={{ bgcolor: 'slategrey', color:"whitesmoke", p: 6}} component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Site Links
                        </Typography>
          
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
  )
}
