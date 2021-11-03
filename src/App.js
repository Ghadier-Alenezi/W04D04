import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cards from "./components/Cards";

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Cards" component={Cards} />
        <Route path ="*" render = {() =>{
        return<h1>404</h1>
      }}/>
      </Switch>
  
    </>
  );
};

export default App;
