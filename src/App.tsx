import React from "react";
import Blog from "./Components/Blog/Blog";
import Experiment from "./Components/Experiment";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col  space-y-20 h-screen bg-body overflow-hidden">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="h-full overflow-y-scroll bg-body ">
                <Home />
                <AboutMe />
                <Work />
                <Experiment />
                <Blog />
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
