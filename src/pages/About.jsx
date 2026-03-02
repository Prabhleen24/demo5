import { Paper, Typography, Grid } from "@mui/material";

export default function About() {
  return (
    <>
      <Typography variant="h4" mb={3}>About Me</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Who I Am</Typography>
            <Typography>
              Passionate AI developer with strong foundations in software engineering.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">What I Do</Typography>
            <Typography>
              I build AI-powered web apps, REST APIs, and full-stack systems.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}