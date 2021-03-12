import React from 'react';
import {render} from 'react-dom';
// import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";

const App = () => {
    return(
        <div>
            <h1 id="title-id">Adopt Me!</h1>
            <SearchParams />
        </div>
    );

};

render(<App/>, document.getElementById("root"));
