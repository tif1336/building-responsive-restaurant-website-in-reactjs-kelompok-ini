import React, { Component } from 'react';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import CustomButton from './button';

interface MenuApi {
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

interface MenuContainerState {
  menus: MenuApi[];
  activeButton: string;
}

export default class MenuContainer extends Component<{}, MenuContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menus: [],
      activeButton: 'all',
    };
  }

  handleClick = (buttonName: string): void => {
    this.setState({ activeButton: buttonName });
  };

  componentDidMount() {
    fetch('https://resto-solo-app-production.up.railway.app/api/menus/')
      .then((response) => response.json())
      .then((data: MenuApi[]) => this.setState({ menus: data }));
  }

  render() {
    const { menus, activeButton } = this.state;


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        paddingY={3}
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Grid component="div" md={2} xs={6} sm={6}>
          <CustomButton
            isactive={activeButton === 'all'}
            onClick={() => this.handleClick('all')}
          >
            All
          </CustomButton>
        </Grid>
        <Grid component="div" md={2} xs={6} sm={6}>
          <CustomButton
            isactive={activeButton === 'pembuka'}
            onClick={() => this.handleClick('pembuka')}
          >
            Pembuka
          </CustomButton>
        </Grid>
        <Grid component="div" md={2} xs={6} sm={6}>
          <CustomButton
            isactive={activeButton === 'utama'}
            onClick={() => this.handleClick('utama')}
          >
            Utama
          </CustomButton>
        </Grid>
        <Grid component="div" md={2} xs={6} sm={6}>
          <CustomButton
            isactive={activeButton === 'penutup'}
            onClick={() => this.handleClick('penutup')}
          >
            Penutup
          </CustomButton>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        paddingY={3}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {menus.map((menu) => (
          <Grid component="div" key={menu.name} xs={9} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, minHeight: 400, bgcolor: '#1A1A1A', color: '#FFFFFF' }}>
              <CardHeader
                avatar={
                  <Avatar
                    variant="rounded"
                    sx={{ bgcolor: '#1A1A1A' }}
                    aria-label="price"
                    style={{ borderRight: '1px solid #DDDDDD' }}
                  >
                    {`$${menu.price}`}
                  </Avatar>
                }
                title={menu.name}
                subheader={`Hidangan ${menu.category}`}
                subheaderTypographyProps={{ color: '#FFFFFF' }}
              />
              <CardMedia component="img" height="194" src={menu.image} alt="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {menu.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
}
