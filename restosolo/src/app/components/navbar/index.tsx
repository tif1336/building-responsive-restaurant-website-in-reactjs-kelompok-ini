"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "About", "Menu", "FAQ", "Blog", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(24, 23, 28, 0.8)",
        backdropFilter: "blur(4px)",
        boxShadow: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 8 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "popins",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Resto Solo
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "poppins",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Resto Solo
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginX: "35px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 3, mx: { lg: 2, md: 1 }, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import React from "react";
// import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";

// const Navbar: React.FC = () => {
//   return (
//     <>
//       <header className="bg-transparent fixed top-0 left-0 w-full flex items-center z-10">
//         <div className="container">
//           <div className="flex items-center justify-between relative">
//             <div className="px-4">
//               <span

//                 className="font-bold text-lg text-white block py-6"
//               >
//                 Resto Solo
//               </span>
//             </div>
//             <div className="flex items-center px-4">
//               <button
//                 id="hamburger"
//                 name="hamburger"
//                 type="button"
//                 className="block absolute right-4 lg:hidden"
//               >
//                 <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out origin-top-left"></span>
//                 <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out"></span>
//                 <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out origin-bottom-left"></span>
//               </button>

//               <nav
//                 id="nav-menu"
//                 className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
//               >
//                 <ul className="block lg:flex">
//                   <li className="group">
//                     <a
//                       href="#"
//                       className="text-base py-2 mx-8 flex hover:text-orange-500"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li className="group">
//                     <a
//                       href="#"
//                       className="text-base py-2 mx-8 flex hover:text-orange-500"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li className="group">
//                     <a
//                       href="#"
//                       className="text-base py-2 mx-8 flex hover:text-orange-500"
//                     >
//                       Menu
//                     </a>
//                   </li>
//                   <li className="group">
//                     <a
//                       href="#"
//                       className="text-base py-2 mx-8 flex hover:text-orange-500"
//                     >
//                       FAQ
//                     </a>
//                   </li>
//                   <li className="group">
//                     <a
//                       href="#"
//                       className="text-base py-2 mx-8 flex hover:text-orange-500"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li className="group">
//                     <a
//                       href="#"
//                       className="text-base py-2 mx-8 flex hover:text-orange-500"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
