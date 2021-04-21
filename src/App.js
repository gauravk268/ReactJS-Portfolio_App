import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Homepage, Feedback, Footer, Error404 } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Homepage />} />
          <Route path="/contact" component={() => <Feedback />} />
          <Route path="*" component={() => <Error404 />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
