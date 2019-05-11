
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

import MyNavBar from "./pages/MyNavBar";


function App() {
  return (
    <div>
      <MyNavBar/>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path='/search' component={Search} />
      </Router>
    </div>
  );
}

export default App;
