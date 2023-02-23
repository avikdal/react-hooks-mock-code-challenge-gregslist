import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")

  function handleSearch(currentSearch) {
    setSearch(currentSearch)
  }

  return (
    <div className="app">
      <Header search={search} handleSearch={handleSearch} />
      <ListingsContainer search={search} />
    </div>
  );
}

export default App;
