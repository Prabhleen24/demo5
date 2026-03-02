import { Typography, TextField, Button, Stack } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Typography variant="h4" mb={3}>Contact Me</Typography>
      <Stack spacing={2} maxWidth={400}>
        <TextField label="Name" />
        <TextField label="Email" />
        <TextField label="Message" multiline rows={4} />
        <Button variant="contained">Send</Button>
      </Stack>
    </>
  );
}