import React, { useState } from 'react'
import { TextField, Button, Container, Paper, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSignUpMutation } from '@/hooks/customHooks/authQuery.hooks';

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
    </>
  )
}
