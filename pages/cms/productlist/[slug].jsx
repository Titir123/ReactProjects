import React, { useEffect } from 'react';
import { TextField, Button, Container, Paper, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { DetailsQuery, useUpdateMutation } from '@/hooks/customHooks/cmsQuery.hooks';

export default function Index() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const { mutate, isPending } = useUpdateMutation();
    const router = useRouter();
    const { slug } = router.query;

    const { data, isLoading, isError } = DetailsQuery(slug);

    useEffect(() => {
        if (!isLoading && !isError && data) {
            setValue("title", data.title);
            setValue("description", data.description);
        }
    }, [data, setValue, isLoading, isError]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("image", data.image[0]);
        formData.append("id", slug);
        mutate(formData);
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading products</p>;

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            Update
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                {...register("title", {
                                    required: "Title is required",
                                })}
                                label="Title"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                error={!!errors.title}
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
                                error={!!errors.description}
                                helperText={errors.description && errors.description.message}
                            />
                            <TextField
                                {...register("image", { required: true })}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                type="file"
                                error={!!errors.image}
                                helperText={errors.image && "Image is required"}
                            />
{isPending ?   <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                sx={{ marginTop: 2 }}
                            >
                                Sending
                            </Button> : 
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                sx={{ marginTop: 2 }}
                            >
                                Send
                            </Button> }
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}