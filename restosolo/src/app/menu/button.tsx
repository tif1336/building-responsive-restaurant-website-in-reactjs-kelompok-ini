import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  isactive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function CustomButton({ isactive, onClick, children }: CustomButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={isactive ? "contained" : "outlined"} onClick={onClick}>
        {children}
      </Button>
    </Stack>
  );
}
