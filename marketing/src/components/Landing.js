import React from 'react'
import { Link } from 'react-router-dom';

function Landing() {
  console.log('Landing');
  return (
    <div>Landing <Link to="/pricing">To Pricing</Link></div>
  )
}

export default Landing