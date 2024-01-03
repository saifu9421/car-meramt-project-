

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const ServicesCard = ({service}) => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  const {title,img , price,_id, description } = service; 

    return (
     <div     
     data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     >
             <div      className='lg:mb-5 mb-5 md:mb-5'>
         

             <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia  


        data-aos="fade-up"
         data-aos-easing="linear"
         data-aos-duration="3000"

          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography  
           data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="3000"
          
          gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography   data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="3000"  variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
            <p className='lg:text-lg md:text-lg text-lg text-orange-500 lg:font-semibold font-semibold md:font-semibold'>prce:${price}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions   data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="3000">
           <Link><Button    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"     variant='outlined' color="error" endIcon={<SendIcon />}> 
         Buy Now 
        </Button></Link>
      </CardActions>
    </Card>


        </div>
     </div>
    );
};

export default ServicesCard;