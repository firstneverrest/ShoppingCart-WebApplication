import React from "react";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <ShoppingCart item="laptop" name="lap" price={900} description="Tuff Gaming" person={{firstName: "Chitsanupong", lastName: "Tangvasinkul"}}/>
    </div>
  );
}

export default App;
