
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const BrowserProductCard = ({product}) => {
    const {img,price , title,id} = product;
  
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <div>
            <Card sx={{ maxWidth: 250 }}>
      <CardActionArea   data-aos="zoom-in">
        <CardMedia  data-aos="fade-down-right"
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent  data-aos="fade-up-left" >
          <Typography className='text-lg font-serif' gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
           <p className='lg:text-lg md:text-lg text-sm  font-serif font-semibold'>price:${price}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions   data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" >
       <Link>
       <Button size="small" color="primary">
          Buy Now 
        </Button>
       </Link>
      </CardActions>
    </Card>
        </div>
    );
};

export default BrowserProductCard;