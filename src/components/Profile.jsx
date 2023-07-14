import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  Phone,
} from "@phosphor-icons/react";

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
        <Avatar sx={{ height: "100px", width: "100px" }} />
        <Typography variant="h5">Okunlola Toheeb H.</Typography>
      </Stack>

 <Stack spacing={2}>
      <Stack spacing={1}>
        <Typography textAlign="center" variant="body2" sx={{ fontWeight: 600 }}>
          ABOUT ME
        </Typography>
        <Divider variant="middle" sx={{ bgcolor: "red" }} />
        <Typography mt={1} textAlign="left" variant="subtitle1">
          {" "}
          {
            "I'm a strong leftfooted creative player, good in creating scoring chances   with PDS passing, dribbling and shooting."
          }
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography textAlign="center" variant="body2" sx={{ fontWeight: 600 }}>
          FOLLOW ME
        </Typography>
        <Divider variant="middle" sx={{ bgcolor: "red" }} />
        <Stack direction="row">
          <IconButton>
            <InstagramLogo color="white" />
          </IconButton>
          <IconButton>
            <FacebookLogo color="white" />
          </IconButton>
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography textAlign="center" variant="body2" sx={{ fontWeight: 600 }}>
          CONTACT ME
        </Typography>
        <Divider variant="middle" sx={{ bgcolor: "red" }} />
        <Stack>
          <Stack alignItems="center" direction="row">
            <IconButton>
              <Phone color="white" size={20} />
            </IconButton>
            <Typography variant="subtitle1">0808857575</Typography>
          </Stack>

          <Stack alignItems="center" direction="row">
            <IconButton>
              <Envelope color="white" size={20} />
            </IconButton>
            <Typography variant="subtitle1">toheeb@gmail.com</Typography>
          </Stack>
        </Stack>
      </Stack>

      </Stack>
    </Stack>
  );
};

export default Profile;
