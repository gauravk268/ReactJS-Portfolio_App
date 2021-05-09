import React from "react";
import { DataProvider } from "./components/contexts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Homepage, ReadMsg, Footer } from "./components";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Homepage />} />
            <Route path="/msg" exact component={() => <ReadMsg />} />
            <Route path="*" component={() => <Homepage />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
