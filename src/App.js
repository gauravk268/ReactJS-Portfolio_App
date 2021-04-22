import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Homepage, Feedback, Footer } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Homepage />} />
          <Route path="/contact" exact component={() => <Feedback />} />
          <Route path="*" component={() => <Homepage />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
