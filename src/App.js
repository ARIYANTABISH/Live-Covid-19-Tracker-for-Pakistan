import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import { Topbar } from "./components/Topbar";
import Updatacrona from "./components/Updatacrona";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Updatacrona />

      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/Contact" component={Contact} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
