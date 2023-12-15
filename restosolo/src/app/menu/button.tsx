import { styled } from '@mui/system';
import { Typography } from '@mui/material';

interface CustomButtonProps {
  isactive: boolean;
}

// styled typography because it's easier to style than button
const CustomButton = styled(Typography)<CustomButtonProps>(({ theme, isactive }) => ({
  backgroundColor: isactive ? "#DF5E00" : "#1A1A1A",
  color: "#FFFFFF",
  fontWeight: 700,
  fontSize: "14px",
  minWidth: "50px",
  textAlign: "center",
  cursor: "pointer",
  padding: "0.75rem 1.25rem",
  borderRadius: "7px",
  textTransform: "none",
  display: "block",
  border: "2px solid #DF5E00",
  "&:hover": isactive
    ? {
        backgroundColor: "#DF5E00",
        color: "#1A1A1A",
        borderColor: "#1A1A1A",
      }
    : {
        backgroundColor: "#FFFFFF",
        color: "#1A1A1A",
        borderColor: "#1A1A1A",
      },
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem 2rem",
  },
  [theme.breakpoints.down("xs")]: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default CustomButton;
