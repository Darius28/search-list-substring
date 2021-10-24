import "./style.css";
import React from "react"
import AppSearch from "./components/AppSearch";
import AppList from "./components/AppList";

function App() {
  return (
    <div className="App">
      <h2>Enter Search Term: </h2>
      <AppSearch />
      <hr />
      <AppList />
    </div>
  );
}

export default App;
