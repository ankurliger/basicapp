import * as React from 'react';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';

import {Box, Typography, Container, Button} from "@mui/material";
function Main() {
  return (
    <Box>
      <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"80vh", flexDirection:"column"}}>
        <Typography variant="h3">Album Layout</Typography>
        <Typography variant="subtitle1" sx={{ width: "450px", textAlign: "center", my: 4, fontSize:"1.2rem",}}>Albums are a treasure house of memories. I have three albums that contain pictures taken by my parents right from the time I was born to the time I started going to school. These photographs have helped me to get a clear picture of my past and the time I was born.</Typography>
        <Button variant="contained">Contact me</Button>
      </Container>
    </Box>

  )
  };

  export default Main;