import { Box, Typography, Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <Stack spacing={2}>
        <Typography variant="h3" fontWeight="bold">
          Hi, I'm Prabhleen 👋
        </Typography>
        <Typography variant="h6">AI Software Developer</Typography>
        <Typography>
          I am a B.Tech student specializing in AI & ML, crafting modern full-stack
          web apps using React, MUI, and scalable backend systems.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained">View Projects</Button>
          <Button variant="outlined">Contact Me</Button>
        </Stack>
      </Stack>
    </Box>
  );
}