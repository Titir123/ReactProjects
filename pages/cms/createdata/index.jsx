import React from 'react'
import { TextField, Button, Container, Paper, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCreateDataMutation } from '@/hooks/customHooks/cmsQuery.hooks';

export default function index() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate , isPending } = useCreateDataMutation();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("image", data.image[0]);
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
                                Create product
                            </Typography>
                            <form>
                                <TextField
                                    {...register("title", {
                                        required: "Title is required",
                                    })}
                                    label="Title"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    error={errors.title}
                                    helperText={errors.title && errors.title.message}
                                />
                                <TextField
                                    {...register("description", {
                                        required: "Description is required",
                                    })}
                                    label="Description"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    error={errors.description}
                                    helperText={errors.description && errors.description.message}
                                />
                                <TextField
                                    {...register("image", { required: true, maxLength: 20 })}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    type="file"
                                    error={!!errors.image}
                                    helperText={errors.image && "Image is required"}
                                />
{isPending ?  <Button
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
                                    Send Message
                                </Button> }
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <br /> <br />
        </>
    )
}
