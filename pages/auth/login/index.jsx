import React from 'react'
import { Card, CardContent, CardHeader, Breadcrumbs, Typography, TextField, Button, Link, Container, Grid, Paper, AppBar, Toolbar, Box, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSignInMutation } from '@/hooks/customHooks/authQuery.hooks';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function index() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending} = useSignInMutation();

  const onSubmit = (data) => mutate(data);
  return (
    <>
    <AppBar position="static" sx={{backgroundColor:"orangered"}}>
      <Toolbar>
       
      <img style={{display:{md:'flex'}, width:"30px", height:"30px"}}
       src="/Images/7191783.png"
       ></img>

        <Box sx={{ flexGrow: 1, textAlign: 'left', marginLeft:1 }}>
          <Typography variant="h6" component="div" sx={{fontFamily:"fantasy", color:"white"}}>
            Clickshop
          </Typography>
        </Box>

        {/* Right Button */}

        <Link href="/auth/register"><Button variant="outlined" sx={{backgroundColor:"darkblue", color:"white"}}>Signup</Button></Link>
      </Toolbar>
    </AppBar>
   <div style= {{background: "linear-gradient(to right, #87CEEB, #4682B4)"}}>
<Container>
   <br /> <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              User Login
            </Typography>
            <form>
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
                error={errors.password}
                helperText={errors.password && "Password is required"}
              />
{isPending ?   <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                sx={{ marginTop: 2 }}
              >
                Loading...
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
                Login
              </Button>
}
            </form>
          </Paper>
        </Grid>
      </Grid>
      <br /> <br />
    </Container>
    </div>
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
        <br />
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
  )
}
