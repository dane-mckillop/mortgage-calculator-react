import './App.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import LandingPage from './pages/LandingPage';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route
          path = {"/"}
          element = { <LandingPage /> }
        />
      </Routes>
    </ThemeProvider>
  )
}

export default App
