import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Navbar from './components/elements/Navbar/Navbar';

import './App.css';

const App = () => {

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Roboto Condensed',
    },
    palette: {
      primary: { main: "#3f3697" },
      secondary: { main: "#fffafa" },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div>
      <Navbar />
    </div>
    </ThemeProvider>
    
  );
}

export default App;
