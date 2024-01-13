import React from "react";
import { Box, Typography } from '@mui/material'

const ManageUser = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Typography variant="h1"> User Diagnosed History </Typography>
    </Box>
  );
};

export default ManageUser;
