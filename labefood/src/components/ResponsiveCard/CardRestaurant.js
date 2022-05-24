import * as React from 'react';
import Card from '@material-ui/core//Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import './style.css'

const CardRestaurant =  ({
    image,
    name,
    category,
    deliveryTime,
    shipping,
    address,
  }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="120"
        image={image}
        alt="foto restaurante"
      />
      <CardContent>
        <Typography className='restname' gutterBottom variant="h5" component="div" >
        {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        {category}
        </Typography>
        <Typography variant="body2" >
        {address}   
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{Math.floor(deliveryTime * 0.9)} - {deliveryTime}</Button>
        <Button size="small">Frete R$ {Number(shipping).toFixed(2)}</Button>
      </CardActions>
    </Card>
  );
}

export default CardRestaurant