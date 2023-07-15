import { Box, Grid } from "@mui/material";
import Profile from "./components/Profile";
import FootballBio from "./components/FootballBio";

const App = () => {
  
  return (
    <Box
      sx={{ width: "900px", minHeight: "100vh", margin: "0 auto" }}
      maxWidth="100%"
    >
      <Box sx={{height: "100%", p: {xs: 3, sm: 5}, color: "white" }}>
        <Grid container  spacing={{xs: 4, md: 0}} sx={{ width: "100%", height: "100%" }}>
          <Grid item xs={12} md={5}>
            <Profile />
          </Grid>

          <Grid item xs={12} md={7} sx={{color: "black"}}>
            <FootballBio />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
