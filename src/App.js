import React from "react";
import "./App.scss";
import ShoppingPageContainer from "./Components/homepage/shoppingPageContainer";
import { QuantitiesProvider } from "./Components/shoppingData/Quantities";

function App() {
  return (
    <QuantitiesProvider>
      <div className="App">
        <ShoppingPageContainer />
      </div>
    </QuantitiesProvider>

  );
}

export default App;
