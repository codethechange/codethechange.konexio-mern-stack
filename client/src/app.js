import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import reduxThunk from "redux-thunk";

import App from "./components/app";
import Home from "./components/home";
import WelcomeButton from "./components/welcomeButton";
import WelcomeText from "./components/welcomeText";
import Public from "./components/myConnections";
import Account from "./components/account";
import Signin from "./components/auth/signin";
import SignupMentee from "./components/auth/signup";
import SignupMentor from "./components/auth/signup_mentor";
import Signout from "./components/auth/signout";
import ChooseAccountType from "./components/chooseAccountType";
import RequireAuth from "./components/auth/require_auth";
import reducers from "./reducers";
import { AUTH_USER } from "./actions/types";

import "../style/style.scss";
import "../style/home.scss";
import "../style/welcomeButton.scss";
import "../style/welcomeText.scss";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem("auth_jwt_token");

// if we have a token, consider the user to be signed in
if (token) {
  store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(
  <Provider store={store}>
    <HashRouter hashType="noslash">
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/public" component={Public} />
          <Route path="/account" component={RequireAuth(Account)} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={ChooseAccountType} />
          <Route path="/signup-mentee" component={SignupMentee} />
          <Route path="/signup-mentor" component={SignupMentor} />
          <Route path="/signout" component={Signout} />
          <Route path="/temp" component={Public} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
