import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { SoccerBall } from "@phosphor-icons/react";

const FootballExperience = () => {
  return (
    <Stack>
      <Stack  spacing={1.2}>
        <Stack spacing={2} direction="row" alignItems="center">
          <IconButton sx={{padding: 0}}>
            <SoccerBall />
          </IconButton>
          <Typography fontWeight={700} variant="subtitle1">FOOTBALL EXPERIENCE</Typography>
        </Stack>

        <Divider variant="middle" sx={{ bgcolor: "white" }} />

        <Stack spacing={1} sx={{mt: 1}} pl={{md: 4}}>
          <Stack>
            <Typography fontWeight={500} variant="subtitle1">Success Star Academy</Typography>
            <Typography sx={{color: "red"}} fontWeight={300} variant="subtitle1">2007 - 2019</Typography>
          </Stack>
          <Stack>
            <Typography fontWeight={500} variant="subtitle1">Lagelu Local Gov Team</Typography>
            <Typography sx={{color: "red"}} fontWeight={300} variant="subtitle1">2019 - 2022</Typography>
          </Stack>
          <Stack>
            <Typography fontWeight={500} variant="subtitle1">ATLAST Sport Team</Typography>
            <Typography sx={{color: "red"}} fontWeight={300} variant="subtitle1">2022 - Present</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FootballExperience;