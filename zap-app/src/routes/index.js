import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";
import LoginPage from '../components/LoginPage/index'
import SignUpPage from '../components/SignUpPage/index'
import RedefinePasswordPage from '../components/RedefinePasswordPage/index'
import ChatPage from '../components/ChatPage/index'

const Routes = () => (
 <ConnectedRouter history={history}>
   <Switch>
     <Route exact path="/" component={LoginPage} />
     <Route exact path="/signup" component={SignUpPage} />
     <Route exact path="/redefinePassword" component={RedefinePasswordPage} />
     <Route exact path="/chat" component={ChatPage} />
   </Switch>
 </ConnectedRouter>
);

export default Routes;
