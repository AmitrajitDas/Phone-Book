//package imports
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/elements/Navbar/Navbar';
import Contacts from './components/elements/Contacts/Contacts';
import AddContact from './components/elements/Contacts/AddContact/AddContact';
import EditContact from './components/elements/Contacts/EditContact/EditContact';

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
          <Route exact path="/contacts/add" component={AddContact} />
          <Route exact path="/contacts/edit/:id" component={EditContact} />
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
