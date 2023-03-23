import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Hello This is container <Link to="/marketing">Marketing</Link>
    </div>
  );
}

export default Home;
