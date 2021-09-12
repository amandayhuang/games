import "./App.css";
import { EasybaseProvider, useEasybase } from "easybase-react";
import { useEffect } from "react";
import ebconfig from "./ebconfig";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import HeightContainer from "./HeightContainer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Router basename="/games">
        <Switch>
          <Route path="/height">
            <HeightContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* <HeightContainer /> */}
    </EasybaseProvider>
  );
};

export default App;
