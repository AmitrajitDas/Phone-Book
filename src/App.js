//package imports
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/elements/Navbar/Navbar';
import Contacts from './components/elements/Contacts/Contacts';
import AddContact from './components/elements/Contacts/AddContact';

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
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/add-contact" component={AddContact} />
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
