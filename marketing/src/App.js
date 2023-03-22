import React from "react";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
