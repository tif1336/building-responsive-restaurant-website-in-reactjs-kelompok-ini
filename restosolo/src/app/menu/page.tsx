import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

interface MenuApi {
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

export default function MenuCard({ name, image, price, category, description }: MenuApi) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 400, bgcolor: "#1A1A1A", color: "#FFFFFF"}}>
      <CardHeader 
        avatar={
          <Avatar variant="rounded" sx={{ bgcolor: "#1A1A1A" }} aria-label="price" style={{ borderRight: '1px solid #DDDDDD' }}>
            {`$${price}`}
          </Avatar>
        }
        title={name}
        subheader={`Hidangan ${category}`}
        subheaderTypographyProps={{ color: "#FFFFFF" }}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
