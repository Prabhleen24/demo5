import { Paper, Typography } from "@mui/material";

export default function Degree() {
  return (
    <>
      <Typography variant="h4" mb={3}>Education</Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">B.Tech Computer Science (2023–2027)</Typography>
        <Typography>
          AI & ML, Data Structures, Databases, Full Stack Development.
        </Typography>
      </Paper>
    </>
  );
}