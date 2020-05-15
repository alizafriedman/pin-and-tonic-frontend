import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login';
// import Signup from './Signup';
import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import SignupPop from './components/SignupPop';
import Boards from './components/Boards'
import { UserContext } from './UserContext'



const App = () => {
  const { Login } = useContext(UserContext);
  return (
    <BrowserRouter>
      <CssBaseline>
        <NavBar />
        {/* <SignupPop /> */}
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
        <Route path="/users/all" component={Boards} />
        </Switch>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;



// import React, { useContext } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { PrivateRoute } from "./routesUtil";
// import LoginPanel from "./LoginPanel";
// import PokemonBrowser from "./PokemonBrowser";
// import { PokemonContext } from "./PokemonContext";

// const App = () => {
//   const { needLogin } = useContext(PokemonContext);



//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/login" component={LoginPanel} />
//         <PrivateRoute
//           path="/"
//           component={PokemonBrowser}
//           needLogin={needLogin}
//         />
//       </Switch>
//     </BrowserRouter>
//   );
// };
