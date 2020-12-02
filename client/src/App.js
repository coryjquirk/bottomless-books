import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//my components
import Search from "./pages/SearchPage";
import Saved from "./pages/SavedPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Nav />
            <Hero />
            <div id="main">
              <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/saved" component={Saved} />
              </Switch>
            </div>
            <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
