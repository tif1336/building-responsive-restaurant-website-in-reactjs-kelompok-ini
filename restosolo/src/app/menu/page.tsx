"use client";

import React, { Component } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import CustomButton from "./button";

function truncateText(text: string, sentenceCount: number): string {
  const sentences = text.split(". ");
  console.log("Sentences:", sentences); // Tambahkan log untuk melihat nilai sentences
  const truncatedText = sentences.slice(0, sentenceCount).join(". ");
  console.log("Truncated Text:", truncatedText); // Tambahkan log untuk melihat nilai truncatedText

  return truncatedText;
}

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
      activeButton: "all",
    };
  }

  handleClick = (buttonName: string): void => {
    this.setState({ activeButton: buttonName });
  };

  componentDidMount() {
    fetch("https://resto-solo-app-production.up.railway.app/api/menus/")
      .then((response) => response.json())
      .then((data: MenuApi[]) => this.setState({ menus: data }));
  }

  render() {
    const { menus, activeButton } = this.state;

    return (
      <div id="menu" className="bg-primary">
        <Typography
          variant="h5"
          noWrap
          component="a"
          className="text-orange-600 text-lg font-bold"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "flex" },
            fontFamily: "sans-serif",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
            marginBottom: "2rem",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "4rem",
          }}
        >
          Our Menu
        </Typography>
        <Box
          sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Grid
            className="container items-center justify-center px-4 pb-16 text-center"
            container
            spacing={2}
            paddingY={2}
          >
            <Grid component="div" md={2} xs={6} sm={6} className="mx-3 mb-4">
              <CustomButton
                isactive={activeButton === "all"}
                onClick={() => this.handleClick("all")}
              >
                All
              </CustomButton>
            </Grid>
            <Grid component="div" md={2} xs={6} sm={6} className="mx-3 mb-4">
              <CustomButton
                isactive={activeButton === "pembuka"}
                onClick={() => this.handleClick("pembuka")}
              >
                Pembuka
              </CustomButton>
            </Grid>
            <Grid component="div" md={2} xs={6} sm={6} className="mx-3 mb-4">
              <CustomButton
                isactive={activeButton === "utama"}
                onClick={() => this.handleClick("utama")}
              >
                Utama
              </CustomButton>
            </Grid>
            <Grid component="div" md={2} xs={6} sm={6} className="mx-3 mb-4">
              <CustomButton
                isactive={activeButton === "penutup"}
                onClick={() => this.handleClick("penutup")}
              >
                Penutup
              </CustomButton>
            </Grid>
          </Grid>
          <Grid
            className="container mx-auto px-10 flex flex-wrap justify-center"
            container
            spacing={2}
            paddingY={2}
            paddingBottom={18}
            data-aos="fade-up"
          >
            {menus
              .filter(
                (menu) =>
                  menu.category.toLowerCase() === activeButton ||
                  activeButton === "all"
              )
              .map((menu) => (
                <Grid
                  component="div"
                  key={menu.name}
                  xs={9}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      minHeight: 400,
                      marginX: 2,
                      marginY: 2,
                      bgcolor: "#2B2A32",
                      color: "#FFFFFF",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          variant="rounded"
                          sx={{ bgcolor: "#1A1A1A" }}
                          aria-label="price"
                          style={{ borderRight: "1px solid #DDDDDD" }}
                        >
                          {`$${menu.price}`}
                        </Avatar>
                      }
                      title={menu.name}
                      subheader={`Hidangan ${menu.category}`}
                      subheaderTypographyProps={{ color: "#FFFFFF" }}
                    />
                    <CardMedia
                      component="img"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "200px",
                      }}
                      src={menu.image}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text-white"
                        style={{ height: "160px" }}
                      >
                        {truncateText(menu.description, 10)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    );
  }
}
