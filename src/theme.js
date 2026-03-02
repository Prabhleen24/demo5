import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#6366f1" },
      background: {
        default: mode === "light" ? "#f5f7fb" : "#0f172a",
        paper: mode === "light" ? "#ffffff" : "#020617",
      },
    },
    typography: {
      fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
  });