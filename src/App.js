import React from "react";
import { render } from "react-dom";
import { Router } from  '@reach/router'
import SearchParams from "./components/SearchParams.jsx";
import Details from "./components/Details.jsx";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="title-id">Adopt Me!</h1>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
