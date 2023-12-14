import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import MenuCard from "./page";
import CustomButton from "./button";

interface MenuApi {
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

export default function MenuContainer() {
  const [menus, setMenus] = React.useState<MenuApi[]>([]);
  const [activeButton, setActiveButton] = React.useState("all");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  React.useEffect(() => {
    fetch("https://resto-solo-app-production.up.railway.app/api/menus/")
      .then((response) => response.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        paddingY={3}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid component="div" md={2} xs={6} sm={6}>
          <CustomButton
            isactive={activeButton === "all"}
            onClick={() => handleClick("all")}
          >
            All
          </CustomButton>
        </Grid>
        <Grid component="div" md={2} xs={6} sm={6}>
          <CustomButton
            isactive={activeButton === "pembuka"}
            onClick={() => handleClick("pembuka")}
          >
            Pembuka
          </CustomButton>
        </Grid>
        <Grid component="div" md={2} xs={6} sm={6}>
          <CustomButton
            isactive={activeButton === "utama"}
            onClick={() => handleClick("utama")}
          >
            Utama
          </CustomButton>
        </Grid>
        <Grid component="div" md={2} xs={6} sm={6}>
          <CustomButton
            isactive={activeButton === "penutup"}
            onClick={() => handleClick("penutup")}
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {menus.map((menu) => (
          <Grid component="div" key={menu.name} xs={9} sm={6} md={4} lg={3}>
            <MenuCard {...menu} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
