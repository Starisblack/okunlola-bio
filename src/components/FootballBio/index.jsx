import { Box, Stack } from "@mui/material";
import FootballData from "./FootballData";
import FootballExperience from "./FootballExperience";
import FootballSkills from "./FootballSkills";

const FootballBio = () => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Stack
        px={{ xs: 0, md: 3 }}
        sx={{ height: "100%", width: "100%" }}
        spacing={3}
      >
        <FootballData />
        <FootballExperience />
        <FootballSkills />
      </Stack>
    </Box>
  );
};

export default FootballBio;
