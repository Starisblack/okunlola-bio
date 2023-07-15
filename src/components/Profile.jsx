import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  Phone,
} from "@phosphor-icons/react";

import okunlola from "../assets/okunlola.jpg";

const Profile = () => {
  return (
    <Stack
      p={2}
      sx={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "red",
        borderRadius: 1.5,
      }}
      spacing={2}
    >
      <Stack alignItems="center" justifyContent="center" spacing={2}>
        <Avatar
          src={okunlola}
          sx={{
            height: "120px",
            width: "120px",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
          alt="okunlola toheeb"
        />
        <Typography variant="h5">Okunlola Toheeb H.</Typography>
      </Stack>

      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography
            textAlign="center"
            variant="body2"
            sx={{ fontWeight: 600 }}
          >
            ABOUT ME
          </Typography>
          <Divider
            variant="middle"
            sx={{ bgcolor: "white", width: "70%", mx: "auto !important" }}
          />
          <Typography mt={1} textAlign="left" variant="subtitle1">
            {" "}
            {
              "I'm a strong leftfooted creative player, good in creating scoring chances   with PDS passing, dribbling and shooting."
            }
          </Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography
            textAlign="center"
            variant="body2"
            sx={{ fontWeight: 600 }}
          >
            FOLLOW ME
          </Typography>
          <Divider
            variant="middle"
            sx={{ bgcolor: "white", width: "70%", mx: "auto !important" }}
          />
          <Stack direction="row">
            <IconButton>
              <InstagramLogo size={30} color="white" />
            </IconButton>
            <IconButton>
              <FacebookLogo size={30} color="white" />
            </IconButton>
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <Typography
            textAlign="center"
            variant="body2"
            sx={{ fontWeight: 600 }}
          >
            CONTACT ME
          </Typography>
          <Divider
            variant="middle"
            sx={{ bgcolor: "white", width: "70%", mx: "auto !important" }}
          />
          <Stack>
            <Stack alignItems="center" direction="row">
              <IconButton>
                <Phone color="white" size={20} />
              </IconButton>
              <Typography variant="subtitle1">
                09137034447 | 07051756590
              </Typography>
            </Stack>

            <Stack alignItems="center" direction="row">
              <IconButton>
                <Envelope color="white" size={20} />
              </IconButton>
              <Typography variant="subtitle1">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="mailto:horlaideygbolahan@gmail.com"
                >
                  horlaideygbolahan@gmail.com
                </a>
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack alignItems="center" direction="row" spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            MY MANAGER CONTACT:
          </Typography>
          <Typography variant="subtitle1">08069379571</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
