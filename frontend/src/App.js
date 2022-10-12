import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Users from "./users/pages/Users";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Users />
      </Route>
    </Router>
  );
}

export default App;
