import "./App.css";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";
import HeightContainer from "./HeightContainer";
import Keyword from "./Keyword";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <HashRouter>
        <Switch>
          <Route path="/height">
            <HeightContainer />
          </Route>
          <Route path="/keyword">
            <Keyword />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </EasybaseProvider>
  );
};

export default App;