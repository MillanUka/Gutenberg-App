import React from 'react';
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import Custom from "../src/Custom.css";
import Search from "../src/Components/Search.js";

function App() {
  return (
    <div className="container" >
      <h1 className="display-4">Gutenberg</h1>

      <Search />
    </div>
  );
}

export default App;