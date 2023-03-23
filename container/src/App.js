import React from "react";
import { Link } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";

function App() {
  return (
    <>
      <div>
        Hello This is container <Link to="/pricing">Pricing</Link>
      </div>
      <MarketingApp />
    </>
  );
}

export default App;
