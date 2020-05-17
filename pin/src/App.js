import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login';
// import Signup from './Signup';
import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import SignupPop from './components/SignupPop';
import Boards from './components/Boards'
import { UserContext } from './UserContext'
import NewBoard from './components/NewBoard'
import BoardPins from './components/BoardPins'
import Splash from './components/Splash'




const App = () => {
  const { Login } = useContext(UserContext);
  return (
    <BrowserRouter>
      <CssBaseline>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/users/all" component={Boards} />
          <Route exact path="/boards/new" component={NewBoard} />
          <Route path="/boards/:id" component={BoardPins} />
        </Switch>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;



