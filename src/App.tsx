import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-body">
      <Header />
      <Home />
    </div>
  );
};

export default App;
