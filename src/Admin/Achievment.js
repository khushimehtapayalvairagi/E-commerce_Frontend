import { Button, Card, CardContent, styled, Typography, Box } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  position: "absolute",
  right: 0,
  bottom: 0,
  height: 170,
  zIndex: 1,
});

const TrophyImg = styled("img")({
  height: 98,
  zIndex: 2,
});

const Achievment = () => {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        width: 350, // Adjust the width as needed
        margin: "auto", // Center the card horizontally
  
    
     
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Left Side: Text Content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
              Shop With Zosh
            </Typography>
            <Typography variant="body2">Congratulations</Typography>
            <Typography variant="h6" sx={{ my: 2.1 }}>
              420.8k
            </Typography>
            <Button size="small" variant="contained">
              View Sales
            </Button>
          </Box>

          {/* Right Side: Trophy Image */}
          <Box sx={{ ml: 2 }}>
            <TrophyImg
              src="https://static.vecteezy.com/system/resources/previews/020/693/159/original/isolated-trophy-icon-free-png.png"
              alt="Trophy"
            />
          </Box>
        </Box>
        {/* Optional: Triangle Image */}
        {/* <TriangleImg src="" alt="Triangle" /> */}
      </CardContent>
    </Card>
  );
};

export default Achievment;
