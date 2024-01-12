import { Box, Typography } from "@mui/material";
import React from "react";

const History = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Typography variant="h2"> Oops! No History to show  </Typography>
      </Box>
    </>
  );
};

export default History;
