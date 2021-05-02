//package imports
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// components
import Navbar from './components/elements/Navbar/Navbar';
import Contacts from './components/elements/Contacts/Contacts';

//styles
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
        <Contacts />
    </div>
    </ThemeProvider>
    
  );
}

export default App;
