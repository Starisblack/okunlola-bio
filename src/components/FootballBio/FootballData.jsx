import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { SoccerBall } from "@phosphor-icons/react";

const FootballData = () => {
  return (
    <Stack>
      <Stack px={3} spacing={1.2}>
        <Stack spacing={2} direction="row" alignItems="center">
          <IconButton sx={{padding: 0}}>
            <SoccerBall />
          </IconButton>
          <Typography fontWeight={700} variant="subtitle1">FOOTBALL DATA</Typography>
        </Stack>

        <Divider variant="middle" sx={{ bgcolor: "white" }} />

        <Stack spacing={0.5} sx={{mt: 1}} pl={{md: 4}}>
          <Stack direction="row" spacing={1}>
            <Typography fontWeight={500} variant="subtitle1">D.O.B:</Typography>
            <Typography fontWeight={300} variant="subtitle1">23 - April - 1999</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography fontWeight={500} variant="subtitle1">HEIGHT:</Typography>
            <Typography fontWeight={300} variant="subtitle1">{"5'7"}</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Typography fontWeight={500} variant="subtitle1">WEIGHT:</Typography>
            <Typography fontWeight={300} variant="subtitle1">68kg</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Typography fontWeight={500} variant="subtitle1">NATIONALITY:</Typography>
            <Typography fontWeight={300} variant="subtitle1">Nigerian</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Typography fontWeight={500} variant="subtitle1">POSITION:</Typography>
            <Typography fontWeight={300} variant="subtitle1">Attacking Mid/Left Winger</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Typography fontWeight={500} variant="subtitle1">FOOT:</Typography>
            <Typography fontWeight={300} variant="subtitle1">Left</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FootballData;
