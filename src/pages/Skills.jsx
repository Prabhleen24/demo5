import { useDispatch, useSelector } from "react-redux";
import { Chip, Stack, Typography, Paper, Button } from "@mui/material";
import { addToCart } from "../store/appSlice";

export default function Skills() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.app.skills);

  return (
    <>
      <Typography variant="h4" mb={3}>Skills</Typography>
      <Paper sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {skills.map((skill) => (
            <Stack key={skill} alignItems="center">
              <Chip label={skill} />
              <Button
                size="small"
                onClick={() =>
                  dispatch(addToCart({ id: `skill-${skill}`, title: skill }))
                }
              >
                Add to Cart
              </Button>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </>
  );
}