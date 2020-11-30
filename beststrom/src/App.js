import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import Freqpage from "./pages/Freqpage";
import Oldhome from "./pages/Oldhome";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sparetips from "./pages/Sparetips";
function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/freqpage">
            <Freqpage />
          </Route>
          <Route path="/oldhome">
            <Oldhome />
          </Route>
          <Route path="/sparetips">
            <Sparetips />
          </Route>
        </Switch>
        <Footer />{" "}
      </Router>
    </div>
  );
}

export default App;
