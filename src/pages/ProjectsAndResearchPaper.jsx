import { useDispatch, useSelector } from "react-redux";
import { Paper, Typography, Grid, Button } from "@mui/material";
import { addToCart } from "../store/appSlice";

export default function ProjectsAndResearchPaper() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.app.projects);

  return (
    <>
      <Typography variant="h4" mb={3}>Projects & Research Papers</Typography>
      <Grid container spacing={3}>
        {projects.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.desc}</Typography>
              <Button sx={{ mt: 2 }} onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}