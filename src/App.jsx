import { Box, Grid, Typography } from "@mui/material";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Box sx={{width: "700px", minHeight: "100vh", margin: "0 auto"}}  maxWidth="100%">

   <Box sx={{width: "100%", height: "100%", p: 5, color: "white"}}>
      <Grid container sx={{width: "100%", height: "100%"}} >

      <Grid item xs={12} md={5}>
      <Profile />
        </Grid>

        <Grid item xs={12} md={7}>
         <Typography>Bio</Typography>
         
        </Grid>

      </Grid>

      </Box>
      </Box>
  );
};

export default App;
