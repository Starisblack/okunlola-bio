import {Divider, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { SoccerBall } from "@phosphor-icons/react";
import ReactSkillbar from "react-skillbars";

const FootballSkills = () => {

    const matches = useMediaQuery('(max-width:900px)');
  const skills = [
    { type: "Leadership", level: 85 },
    { type: "Dribbling", level: 95 },
    { type: "Shooting", level: 90 },
    { type: "Passing", level: 88 },
    { type: "Communication", level: 100 },
  ];


  return (
    <Stack>
      <Stack  spacing={1.2}>
        <Stack spacing={2} direction="row" alignItems="center">
          <IconButton sx={{ padding: 0 }}>
            <SoccerBall />
          </IconButton>
          <Typography fontWeight={700} variant="subtitle1">
            FOOTBALL SKILLS
          </Typography>
        </Stack>

        <Divider variant="middle" sx={{ bgcolor: "white" }} />

        <Stack>
          <ReactSkillbar animationDelay={"500ms"} skills={skills} height={matches ? 30 : 20} />
        </Stack>
        {/* <Stack direction="row" spacing={1} sx={{mt: 1}} pl={{md: 4}}>
    
        <Stack>
          <Typography fontWeight={500} variant="subtitle1">Leadership</Typography>
          <Typography sx={{color: "red"}} fontWeight={300} variant="subtitle1">2007 - 2019</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={500} variant="subtitle1">Dribbling</Typography>
          <Typography sx={{color: "red"}} fontWeight={300} variant="subtitle1">2019 - 2022</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={500} variant="subtitle1">Shooting</Typography>
          <Typography sx={{color: "red"}} fontWeight={300} variant="subtitle1">2022 - Present</Typography>
        </Stack>

        <Stack>
          <Typography fontWeight={500} variant="subtitle1">Passing</Typography>
          <Typography sx={{color: "red"}} fontWeight={300} variant="subtitle1">2022 - Present</Typography>
        </Stack>

        <Stack>
          <Typography fontWeight={500} variant="subtitle1">Communication</Typography>
          <Typography sx={{color: "red"}} fontWeight={300} variant="subtitle1">2022 - Present</Typography>
        </Stack>
      </Stack> */}
      </Stack>
    </Stack>
  );
};

export default FootballSkills;
