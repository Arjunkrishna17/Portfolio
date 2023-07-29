import React from "react";
import Blog from "./Components/Blog";
import Experiment from "./Components/Experiment";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";

const App = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-body">
      <Header />
      <Home />
      <Experiment />
      <Work />
      <Blog />
    </div>
  );
};

export default App;
