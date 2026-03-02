import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { getTheme } from "./theme";
import TopNavbar from "./components/TopNavbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Degree from "./pages/Degree";
import Skills from "./pages/Skills";
import ProjectsAndResearchPaper from "./pages/ProjectsAndResearchPaper";
import Contact from "./pages/Contact";

function App() {
  const { activePage, theme } = useSelector((state) => state.app);

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "degree":
        return <Degree />;
      case "skills":
        return <Skills />;
      case "projects":
        return <ProjectsAndResearchPaper />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <CssBaseline />
      <TopNavbar />
      <Container sx={{ mt: 10 }}>{renderPage()}</Container>
    </ThemeProvider>
  );
}

export default App;