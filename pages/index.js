import Image from "next/image";
import { Inter } from "next/font/google";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import Link from "next/link";

import img1 from '../public/Images/istockphoto-1251629816-170667a.webp';
import img2 from '../public/Images/240_F_365528663_miV08QzGGVLqhRRQVQ4B9C9PtoTRJiSv.jpg';
import img3 from '../public/Images/240_F_785356101_zxsJTOB9L2CATVzKntId5IdvdfTNYvZZ.jpg';


const inter = Inter({ subsets: ["latin"] });
const prod =["Electronics", "Beauty", "Home Appliances"];
const image = [img1, img2, img3];

export default function Home() {
    return (
        <>
        <div>
             <Carousel indicators={false} fade={true} interval={2000}>
      <Carousel.Item>
      <img
          className="d-block w-100 carousel-image"
          src="Images/banner-shells-blue-wood-background-light-format-60791177.webp" 
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h2 className="heading">Best solution to all your needs</h2>
          <p className="para">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 carousel-image"
          src= "Images/blue-red-object-with-red-blue-design-is-shown_337384-104744.jpg" 
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2 className="heading">Exclusive products</h2>
          <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 carousel-image"
          src="Images/240_F_365528663_miV08QzGGVLqhRRQVQ4B9C9PtoTRJiSv.jpg" 
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 className="heading">Affordable with high quality</h2>
          <p className="para">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
              
           
        </div>
        <Container maxWidth="lg">

<Typography sx={{display:"flex",alignItems:"center", justifyContent:"center", variant:"h2", fontSize:"40px", marginTop:"100px", color:"Red", fontFamily:"cursive"}}>
  Our Products
</Typography>
<Typography sx={{display:"flex",alignItems:"center", justifyContent:"center", variant:"p", fontSize:"20px", marginTop:"20px", color:"GrayText"}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do <br /> eiusmod.
</Typography>
<>
<Box sx={{height:"100px"}}>

</Box>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }}>
{Array.from(Array(3)).map((_, index) => (
  <Grid item xs={12} sm={12} md={4} key={index}>
     <Card variant='outlined' sx={{ display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column", height:500}}>
      <Image
     component="img"
       style width={300} height= {230}
      src ={image[index]}
      alt="green iguana"/>
    <CardContent sx={{display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
      <Typography gutterBottom variant="h5" component="div">
        {prod[index]}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Lorem Ipsum dolor sit amet Lo Lorem Ipsum dolor sit amet  Lorem Ipsum dolor sit amet rem Ipsum dolor sit amet 
      </Typography>
    </CardContent>
    <CardActions>
    <Button sx={{
borderColor:"red",
borderRadius:"20px"}} variant="outlined">
  <Link style={{color:"Red", textDecoration:"none"}} href='cms/productlist'>Read More</Link>
</Button>
    </CardActions>
    </Card>
  </Grid>
))}
</Grid>
</>
</Container>
<br /> <br /> <br />
       </> 
    );
}